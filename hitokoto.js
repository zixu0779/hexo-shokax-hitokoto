hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('hitokoto','views/hitokoto.pug',{}, {cache: false});
});