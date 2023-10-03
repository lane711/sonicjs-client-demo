import { Grid } from "gridjs-react";

const UserList = () => {
  // State to store the fetched data
  // const [data, setData] = useState([]);

  // Function to fetch data using Axios
  // const fetchData = async () => {
  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: "https://demo.sonicjs.com/v1/users?limit=20",
  //     });
  //     // debugger;
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // // Call fetchData on component mount
  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <div>
      <h2>Users:</h2>
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul> */}

      <Grid
        columns={["FirstName", "LastName", "Email"]}
        search={true}
        pagination={{
          limit: 10,
          server: {
            url: (prev, page, limit) =>
              `${prev}?limit=${limit}&offset=${page * limit}`,
          },
        }}
        server={{
          url: "https://demo.sonicjs.com/v1/users",
          data: (opts) => {
            return new Promise((resolve, reject) => {
              // let's implement our own HTTP client
              const xhttp = new XMLHttpRequest();
              // const start = Date.now();

              xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                  if (this.status === 200) {
                    const resp = JSON.parse(this.response);
                    // $("#executionTime").show();
                    // $("#executionTime span.serverTime").text(
                    //   resp.executionTime
                    // );
                    // $("#executionTime span.source").text(resp.source);
                    // make sure the output conforms to StorageResponse format:
                    // https://github.com/grid-js/gridjs/blob/master/src/storage/storage.ts#L21-L24

                    // const end = Date.now();
                    // const clientExecutionTime = end - start;
                    // $("#executionTime span.clientTime").text(
                    //   clientExecutionTime
                    // );
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
      <div id="executionTime" class="p-4 text-center text-muted hide">
        Data Retrieval - <b>Server</b>: <span class="serverTime"></span>ms,{" "}
        <b>Client</b>: <span class="clientTime"></span>ms. <b>Source</b>:{" "}
        <span class="source"></span>
      </div>
    </div>
  );
};

export default UserList;

// const dataGrid = new gridjs.Grid({
//   columns: [
//     {
//       name: "Record",
//       formatter: (editPath) => gridjs.html(`${editPath}`),
//     },
//     {
//       name: "Updated",
//       formatter: (dt) =>
//         gridjs.html(`<time class="timeSince" datetime="${dt}">${dt}</time>`),
//     },
//   ],
//   pagination: {
//     limit: 10,
//     server: {
//       url: (prev, page, limit) =>
//         `${prev}?limit=${limit}&offset=${page * limit}`,
//     },
//   },
//   server: {
//     url: `/admin/api/${getTable()}`,
//     data: (opts) => {
//       return new Promise((resolve, reject) => {
//         // let's implement our own HTTP client
//         const xhttp = new XMLHttpRequest();
//         const start = Date.now();

//         xhttp.onreadystatechange = function () {
//           if (this.readyState === 4) {
//             if (this.status === 200) {
//               const resp = JSON.parse(this.response);
//               $("#executionTime").show();
//               $("#executionTime span.serverTime").text(resp.executionTime);
//               $("#executionTime span.source").text(resp.source);
//               // make sure the output conforms to StorageResponse format:
//               // https://github.com/grid-js/gridjs/blob/master/src/storage/storage.ts#L21-L24

//               const end = Date.now();
//               const clientExecutionTime = end - start;
//               $("#executionTime span.clientTime").text(clientExecutionTime);
//               resolve({
//                 data: resp.data.map((record) => [
//                   record.editLink,
//                   record.updatedOn,
//                 ]),
//                 total: resp.total,
//               });
//             } else {
//               reject();
//             }
//           }
//         };
//         xhttp.open("GET", opts.url, true);
//         xhttp.send();
//       });
//     },
//   },
// }).render(document.getElementById("grid"));

// $(document).on(".timeSince", function () {
//   // $(this).html('<b>yaay!</b>');
//   console.log("new time since");
// });

// function getTable() {
//   return $("#grid").data("route");
// }
