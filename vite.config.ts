import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: true, // or '0.0.0.0'
        allowedHosts: ['hack.snioe.dev', 'hackenshmirtz.snioe.dev', 'hack-enshmirtz.snioe.dev']
    }
});
