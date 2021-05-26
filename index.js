const program = require('commander');
var process1 = require('child_process');
//version 版本号
//name 新项目名称
program.version('1.0.2')
  .command('init <xt-react-web-webpack5>')
  .action((name) => {
    console.log('clone template ...');
    process1.exec('https://github.com/catzjzj/xt-react-cli.git' + name, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        return;
      }
      console.log(stdout);
      console.log('clone success');
    });
  });
program.parse(process.argv);