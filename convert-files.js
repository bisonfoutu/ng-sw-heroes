const {exec} = require('child_process');
exec('npx asciidoctor -D html 0-contents.adoc 1-getting-started.adoc 2-hero-detail.adoc 3-hero-list.adoc 4-master-detail.adoc 5-services.adoc 6-routing.adoc 7-http.adoc\n', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
