const req = [
  "https://github.com/spuf/itmo-webdev-2022",
];

async function gen() {
  let res = [];
  for (const r of req) {
    const [_, owner, repo] = r.match(/https:\/\/github.com\/([^\/]+)\/([^\/]+)/);

    const f = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      }),
    });
    const url = (await f.json()).html_url;

    res.push({ owner, repo, url, progress: 0 });
  }

  return res;
}
gen().then((data) => console.log(JSON.stringify(data)));

// prettier --print-width 10 -w people.json
