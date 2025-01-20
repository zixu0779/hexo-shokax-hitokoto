const path = require('path');

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('hitokoto', path.join(__dirname, 'views/hitokoto.pug'),{}, {cache: false});
});