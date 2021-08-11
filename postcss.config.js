module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-import'),
        require('@fullhuman/postcss-purgecss')({
            content:['./views/**/*.ejs'],
                defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}