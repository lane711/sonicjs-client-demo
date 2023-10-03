import { Grid } from "gridjs-react";

const UserList = () => {

  console.log('process.env;', process.env)

  const apiUrl = `${process.env.REACT_APP_API}/v1/users`;

  return (
    <div>
      <h2>Users:</h2>

      <Grid
        columns={["FirstName", "LastName", "Email"]}
        search={true}
        className={{
          td: 'grid-table-td',
          table: 'grid-table' 
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
                        record.firstName,
                        record.lastName,
                        record.email,
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
    </div>
  );
};

export default UserList;
