const Home = () => {
  return (
    <div className="home">
      <h1>About</h1>
      <p>
        This is a demo app created in React to showcase the speed of{" "}
        <a target="_blank" rel="noreferrer" href="https://sonicjs.com">
          SonicJs
        </a>{" "}
        in comparison to other API frameworks and headless CMS.
      </p>
      <p>
        For each framework we build a simple blog management schema along with
        an api to get blog posts with related data. Each framework is populated
        with the same faker.js based data loader.
      </p>
      <h2>Schema</h2>
      <div className="row">
        <div className="col">
          {" "}
          <h3>Users Table</h3>
          <ul>
            <li>id (guid)</li>
            <li>firstName (text)</li>
            <li>lasttName (text)</li>
            <li>email (text)</li>
            <li>password (text)</li>
            <li>role (text)</li>
            <li>createdIn(date)</li>
          </ul>
        </div>
        <div className="col">
          {" "}
          <h3>Posts Table</h3>
          <ul>
            <li>id (guid)</li>
            <li>title (text)</li>
            <li>body (text)</li>
            <li>userId (guid)</li>
            <li>createdIn(date)</li>
          </ul>
        </div>
        <div className="col">
          {" "}
          <h3>Category Table</h3>
          <ul>
            <li>id (guid)</li>
            <li>title (text)</li>
            <li>body (text)</li>
            <li>userId (guid)</li>
            <li>createdIn(date)</li>
          </ul>
        </div>
        <div className="col">
          {" "}
          <h3>Comments Table</h3>
          <ul>
            <li>id (guid)</li>
            <li>body (text)</li>
            <li>userId (guid)</li>
            <li>postId (guid)</li>
            <li>createdIn(date)</li>
          </ul>
        </div>
      </div>
      <h2>Schema Relations</h2>
      <ul>
        <li>Users can have many posts and many Comments</li>
        <li>
          Posts can have one userId (author), many Categories, many Comments
        </li>
        <li>Categories can have many Posts</li>
        <li>Comments can have one Post and one User (author)</li>
        <li>Many to many between Posts and Categories</li>
      </ul>
      <h2>Dataset Size</h2>
      <ul>
        <li>Users - 5,000 records</li>
        <li>Posts - 10,000 records</li>
        <li>Categories - 5,000 records</li>
        <li>Comments - 30,000 records</li>
        <li>Categories To Posts - 10,000 records</li>
      </ul>
      <h2>Query</h2>
      <p>
        For our comparison we use a moderately complex query containing 4 joins,
        a count of comments per post and the overall posts record count. If you
        would like to see the raw json delivered by our apis for all frameworks,
        it is{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://demo.sonicjs.com/v1/example/blog-posts?limit=10&offset=0"
        >
          here
        </a>
        .
      </p>
      <div className="bg-white p-3">
        <font face="Courier New" size="2">
          <font color="blue">SELECT</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">title</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">updatedon</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="#FF0080">
            <b>Substr</b>
          </font>
          <font color="maroon">(</font>
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">body</font>
          <font color="silver">,</font>&nbsp;<font color="black">0</font>
          <font color="silver">,</font>&nbsp;<font color="black">20</font>
          <font color="maroon">)</font>&nbsp;<font color="blue">AS</font>&nbsp;
          <font color="maroon">body</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">users</font>
          <font color="silver">.</font>
          <font color="maroon">firstname</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="silver">||</font>&nbsp;<font color="red">'&nbsp;'</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="silver">||</font>&nbsp;<font color="maroon">users</font>
          <font color="silver">.</font>
          <font color="maroon">lastname</font>&nbsp;<font color="blue">AS</font>
          &nbsp;<font color="maroon">author</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="fuchsia">
            <i>Count</i>
          </font>
          <font color="maroon">(</font>
          <font color="maroon">comments</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <font color="maroon">)</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="blue">AS</font>&nbsp;
          <font color="maroon">commentcount</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">categories</font>
          <font color="silver">.</font>
          <font color="maroon">title</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="blue">AS</font>&nbsp;<font color="maroon">category</font>
          <font color="silver">,</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="fuchsia">
            <i>Count</i>
          </font>
          <font color="maroon">(</font>
          <font color="maroon">)</font>&nbsp;<font color="blue">OVER</font>
          <font color="maroon">(</font>
          <font color="maroon">)</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="blue">AS</font>&nbsp;<font color="maroon">total</font>
          <br />
          <font color="blue">FROM</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <br />
          <font color="blue">LEFT</font>&nbsp;<font color="blue">OUTER</font>
          &nbsp;<font color="blue">JOIN</font>&nbsp;
          <font color="maroon">users</font>
          <br />
          <font color="blue">ON</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">userid</font>&nbsp;<font color="silver">=</font>
          &nbsp;<font color="maroon">users</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <br />
          <font color="blue">LEFT</font>&nbsp;<font color="blue">OUTER</font>
          &nbsp;<font color="blue">JOIN</font>&nbsp;
          <font color="maroon">comments</font>
          <br />
          <font color="blue">ON</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">comments</font>
          <font color="silver">.</font>
          <font color="maroon">postid</font>&nbsp;<font color="silver">=</font>
          &nbsp;<font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <br />
          <font color="blue">LEFT</font>&nbsp;<font color="blue">OUTER</font>
          &nbsp;<font color="blue">JOIN</font>&nbsp;
          <font color="maroon">categoriestoposts</font>
          <br />
          <font color="blue">ON</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">categoriestoposts</font>
          <font color="silver">.</font>
          <font color="maroon">postid</font>&nbsp;<font color="silver">=</font>
          &nbsp;<font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <br />
          <font color="blue">LEFT</font>&nbsp;<font color="blue">OUTER</font>
          &nbsp;<font color="blue">JOIN</font>&nbsp;
          <font color="maroon">categories</font>
          <br />
          <font color="blue">ON</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">categoriestoposts</font>
          <font color="silver">.</font>
          <font color="maroon">categoryid</font>&nbsp;
          <font color="silver">=</font>&nbsp;
          <font color="maroon">categories</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <br />
          <font color="blue">GROUP</font>&nbsp;<font color="blue">BY</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">id</font>
          <br />
          <font color="blue">ORDER</font>&nbsp;<font color="blue">BY</font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">posts</font>
          <font color="silver">.</font>
          <font color="maroon">updatedon</font>&nbsp;
          <font color="blue">DESC</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">limit</font>&nbsp;
          <font color="black">10</font>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font color="maroon">offset</font>&nbsp;
          <font color="silver">?</font>
        </font>
      </div>
      <h2>Grid</h2>
      <p>
        For the display grid, we're using a simple implemetnation of{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gridjs.io/docs/integrations/react"
        >
          Gridjs for React
        </a>
        . The grid will show 10 results and allow the user to navigate between
        pages.
      </p>
      <h2>API Stats</h2>
      <p>
        The API stats are listed at the bottom of each grid. This will show 2
        main key performance indicators:
      </p>
      <p>
        <ol>
          <li>
            Server data retrieval time - This is the time the server needed to
            process the request, obtain and package the response and send it.
          </li>
          <li>
            Client data retrieval time - This is the total time the client took
            to post the request and then process the response.
          </li>
        </ol>
      </p>
      <h2>Takeaways</h2>
      <p>
        SonicJs is faster than any other framework previously available by a
        very wide margin. In most cases its several times faster in terms of how
        fast it can deliver json payload to your client application.
      </p>
      <h2>FAQs</h2>
      <h4>How is SonicJs so fast?</h4>
      <p>
        SonicJs is build from the ground up on the Cloudflare Workers tech
        stack.
      </p>
      <p>
        Cloudflare Workers is a serverless platform offered by Cloudflare that
        allows developers to run their code at the edge of Cloudflare's network.
        This means that the code is executed in data centers closest to the end
        users, resulting in reduced latency and faster response times.
      </p>

      <p>Here are a few reasons why Cloudflare Workers can be fast:</p>

      <p>
        <b>Distributed Edge Network</b>: Cloudflare has a vast network of data
        centers spread across the globe. When you deploy your code using
        Workers, it runs on this distributed edge network. This proximity to
        users helps reduce the distance and network hops between the code
        execution and the end users, resulting in faster response times.
      </p>

      <p>
        <b>Low Latency</b>: By running code at the edge, Cloudflare Workers can
        respond to requests quickly, without the need to route traffic to a
        centralized server. This reduces the round-trip time for requests,
        leading to lower latency and faster processing.
      </p>

      <p>
        <b>Optimized Architecture</b>: Cloudflare has optimized its
        infrastructure to ensure the efficient execution of Workers. They
        leverage technologies like V8 isolates, a high-performance JavaScript
        engine, to execute code quickly. Additionally, Cloudflare continuously
        invests in improving the performance of its network and infrastructure.
      </p>

      <p>
        <b>Caching and Content Delivery</b>: Cloudflare's edge network includes
        various caching mechanisms. When you use Workers, you can leverage these
        caching capabilities to store frequently accessed data or responses
        closer to the end users. This reduces the need to fetch data from the
        origin server, resulting in faster content delivery.
      </p>

      <p>
        <b>Asynchronous Processing</b>: Cloudflare Workers are designed to
        handle requests asynchronously. They can process multiple requests
        concurrently, without blocking or waiting for previous requests to
        complete. This asynchronous nature enables efficient utilization of
        server resources and enhances overall performance.
      </p>

      <p>
        It's important to note that the actual performance of Cloudflare Workers
        can vary depending on various factors such as the complexity of your
        code, the number of requests, the geographical distribution of your
        users, and the specific use case. However, in general, Cloudflare
        Workers' architecture and edge network contribute to its ability to
        provide fast response times and improved performance.
      </p>
      <h4>
        Why are the non SonicJs so slow when I first navigate to the grid?
      </h4>
      <p>
        Many framework have a warm up time for idle processes. This is not the
        case with Cloudflare Workers. Even if your app has low traffic, your
        data will remain primed to be served quickly.
      </p>
      <h4>
        Could I achieve similar low latency times with AWS, GCP, Vercel, etc?
      </h4>
      <p>
        AWS only has 32 regions compared to well over 200 from Cloudflare, so
        right off the bat you are going to have much higher average latency
        times. And that assume that you are deploying edge function in multiple regions which can quickly get costly.</p>
        
         <p>However the big difference is that SonicJs replicates your data
        across all 200+ Cloudflare nodes, enabling it to be served to your
        clients at speeds wildly faster than anything previously
        possible.
      </p>
      <h4>Have more questions?</h4>
      <p>
        Please join the SonicJs discussion on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/8bMy6bv3sZ"
        >
          Discord.
        </a>
      </p>
    </div>
  );
};

export default Home;
