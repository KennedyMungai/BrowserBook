import axios from 'axios';
import * as esbuild from 'esbuild-wasm';
import localforage from 'localforage';


const fileCache = localforage.createInstance({
    name: 'filecache'
});


export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode,
                    };
                }

                const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

                if (cachedResult) {
                    return cachedResult;
                }

                const { data, request } = await axios.get(args.path);

                const fileType = args.path.match(/.css$/) ? 'css' : 'jsx';

                const escaped = data.replace(/\n/g, '');

                const contents = fileType === 'css' ?
                    `
                        const style = document.createElement('style');
                        style.innerText = '${data}';
                        document.head.appendChild(style);
                    ` : data;

                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents,
                    resolveDir: new URL('./', request.responseURL).pathname
                };

                // Store the response in cache
                await fileCache.setItem(args.path, result);

                return result;
            });
        }
    }
};