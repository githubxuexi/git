//使用fis-parser-jade插件编译jade文件
fis.config.set('modules.parser.jade', 'jade');
//jade文件经过编译后输出为html文件
fis.config.set('roadmap.ext.jade', 'html');



fis.config.set('modules.parser.styl', 'stylus2');
fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings 
fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it is opened 
fis.config.set('roadmap.ext.styl', 'css');


