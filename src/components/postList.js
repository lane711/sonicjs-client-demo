import { Grid } from "gridjs-react";
import { html } from "gridjs";

const PostList = (props) => {
  console.log("process.env;", process.env);

  const apiUrl = `${props.url}`;

  return (
    <div>
      <h2>Posts:</h2>

      <Grid
        columns={[
          {
            name: "Title",
            formatter: (title) => html(`${title}`),
          },
          { name: "Author", width: "230px" },
          { name: "Comments", width: "60px" },
          { name: "Category", width: "180px" },
          { name: "Body", width: "200px" },
        ]}
        search={true}
        className={{
          td: "grid-table-td",
          table: "grid-table",
        }}
        pagination={{
          limit: 10,
          server: {
            url: (prev, page, limit) =>
              `${prev}?limit=${limit}&offset=${page * limit}`,
          },
        }}
        server={{
          url: apiUrl,
          data: (opts) => {
            return new Promise((resolve, reject) => {
              // let's implement our own HTTP client
              const xhttp = new XMLHttpRequest();
              const start = Date.now();

              xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                  if (this.status === 200) {
                    document.getElementById(
                      "responseURL"
                    ).innerHTML = `<a target="_blank" href='${this.responseURL}'>${this.responseURL}</a>`;

                    const resp = JSON.parse(this.response);

                    const end = Date.now();
                    const clientExecutionTime = end - start;
                    console.log("clientExecutionTime", clientExecutionTime);
                    let clientTime = document.getElementById("clientTime");
                    clientTime.innerHTML = clientExecutionTime;

                    let serverTime = document.getElementById("serverTime");
                    serverTime.innerHTML = resp.executionTime;

                    let dataSource = document.getElementById("dataSource");
                    dataSource.innerHTML = resp.source;

                    resolve({
                      data: resp.data.map((record) => [
                        `<a target="_blank" href="${apiUrl}/${record.id}" >${record.title}</a>`,
                        record.author,
                        record.commentCount,
                        record.category,
                        record.body + "...",
                      ]),
                      total: resp.total,
                    });
                  } else {
                    reject();
                  }
                }
              };
              xhttp.open("GET", opts.url, true);
              xhttp.send();
            });
          },
        }}
      />
      <div className="executionTime">
        Data Retrieval | <b>Server</b>: <span id="serverTime"></span>ms |{" "}
        <b>Client</b>: <span id="clientTime"></span>ms | <b>Source</b>:{" "}
        <span id="dataSource"></span>
      </div>
      <div id="responseURL"></div>
    </div>
  );
};

export default PostList;
