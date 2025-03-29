export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto max-w-screen-xl py-48">
        <h1 className="text-6xl font-bold">Hi, {"I'm"} Ervin Gorospe</h1>
        <ul className="space-y-12 mt-16">
          <li>
            <h2 className="text-2xl">
              1. Talk about how you made your site and why you chose the tools
              you did. Briefly explain one challenge you experienced in setting
              up this site and how you overcame it.
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              I developed my website utilizing a framework known as Next.js.
              This open-source React framework is well-suited for building both
              static and dynamic websites. It enhances SEO management, is
              optimized for quicker loading times, and supports server-side
              rendering, which further improves SEO. Moreover, it provides
              static site generation, enabling pages to be pre-rendered as
              static HTML, thereby boosting performance and SEO.
              <br />
              <br />I selected Next.js for my website framework due to my
              extensive experience with it, my ability to use it effectively,
              and its status as the most proficient framework I have encountered
              for website development.
              <br />
              <br />I used VS Code as my main code editor. This platform offers
              a diverse range of extensions that enhance the speed of coding,
              debugging, and setup tasks. Additionally, I value the option to
              personalize its theme based on my tastes. I consider VS Code to be
              easy to use, featuring a very intuitive interface.
              <br />
              <br />I deployed my website using Netlify. This platform is
              rapidly gaining popularity for the launch of static webpages and
              online applications. It is incredibly flexible, easy to use, and
              offers free hosting. With its global CDN and easy integration with
              Git repositories, Netlify ensures that websites stay fast, safe,
              and updated often. Additionally, it supports serverless
              functionality, enabling developers to set up API endpoints without
              having to worry about server management.
              <br />
              <br />
              One challenge I experienced while setting up my site was that
              Netlify {`couldn't`} find my newly created repository. To resolve
              this, I checked whether Netlify was authorized to access my GitHub
              account.
              <ul className="list-disc pl-5 text-base mt-2">
                <li>
                  First, I went to GitHub and clicked on my profile in the
                  upper-left corner. Then, I navigated to Settings and scrolled
                  down to the Applications tab on the left panel. Under
                  Installed GitHub Apps, I found Netlify and clicked Configure
                  on the right side.
                </li>
                <li>
                  Next, I scrolled down to the Repository Access section and
                  selected Only select repositories. I then chose the specific
                  repository I wanted Netlify to access.
                </li>
                <li>
                  After completing these steps, I reloaded Netlify, went to Add
                  new site {`>`} Import an existing project, selected GitHub,
                  and then chose the repository I wanted to deploy.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <h2 className="text-2xl">
              2. What did you think of our service during the time you used it?
              Provide some constructive criticism or some features that
              impressed you.
            </h2>
            <div className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              <ul className="list-decimal">
                <li>
                  <strong>Easy Deployments</strong>. I just need to connect it
                  to my GitHub, and every time I push something to my
                  repository, it will automatically build and deploy the
                  changes. Also, I don’t need to configure complex CI/CD
                  pipelines.
                </li>
                <li>
                  <strong>Serverless Functions</strong>. This is awesome!
                  Instead of creating an entire project just to expose one
                  service, Netlify allows you to deploy a function that can be
                  utilized by other applications.
                </li>
                <li>
                  <strong>Free SSL & HTTP/2</strong>. It provides security for
                  the deployed website and even generates a temporary domain
                  name.
                </li>
                <li>
                  <strong>Global CDN</strong>. Every site is deployed across
                  Netlify’s global network, ensuring faster load times for users
                  no matter where they are.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl">
              3. Rank your 5 favorite and 5 least favorite activities from this
              list:{" "}
              <a
                href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab"
                target="_blank"
                className="text-blue-400 hover:text-blue-500"
              >
                https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab
              </a>
            </h2>
            <div className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              <p className="text-xl underline">
                <strong>5 favorite</strong>
              </p>
              <ul className="mt-2 ml-8 list-decimal">
                <li>
                  Work with the development team to help design a new feature
                  based on feedback from customers
                </li>
                <li>Develop a code example to share with a customer</li>
                <li>Help train and onboard new support teammates</li>
                <li>
                  Debug a {"customer's"} build using a programming language and
                  framework that {"you've"} never seen before
                </li>
                <li>Manage a Support team</li>
              </ul>
              <p className="mt-4 text-xl underline">
                <strong>5 least Favorite activities</strong>
              </p>
              <ul className="mt-2 ml-8 list-decimal">
                <li>
                  Create video tutorials to help teach users a specific feature
                  or use case
                </li>
                <li>
                  Engage multiple users at once via chat to answer their
                  questions and troubleshoot problems
                </li>
                <li>Help train and onboard new support teammates</li>
                <li>
                  Dig through server logs to troubleshoot a {"customer's"}{" "}
                  website behavior
                </li>
                <li>
                  Join a Zoom call with a VIP customer you have been helping via
                  email, upon their request
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl">
              4. Provide a link to documentation for a
              technical/developer-focused product, which you think are well
              done, and explain why you think they are well done.{" "}
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                className="text-blue-400 hover:text-blue-500"
              >
                https://nextjs.org/docs
              </a>
            </h2>
            <div className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              <ul className="list-decimal">
                <li>
                  <strong>Well-structured and simple to use</strong>. Finding
                  particular topics is made simple by the {"sidebar's"} several
                  sections, which include Getting Started, Routing, API Routes,
                  and Deployment.
                  <br />
                  Every page is organized using links to relevant topics,
                  headings, and subheadings.
                </li>
                <li>
                  <strong>Easy to Learn & All-Inclusive</strong>. A Getting
                  Started tutorial is provided at the beginning to help new
                  users with installation and basic usage.
                  <br />
                  For seasoned coders, it also covers more complex subjects like
                  Server Actions and Incremental Static Regeneration (ISR).
                </li>
                <li>
                  <strong>Code Excerpts & Useful Illustrations</strong>. There
                  are copy-paste-friendly code samples in practically every
                  section. <br />
                  Key ideas, like dynamic routing or API routes, are shown using
                  real-world examples.
                </li>
                <li>
                  <strong>Explicit Descriptions with Illustrations</strong>.
                  Ideas are presented succinctly and simply, without needless
                  complication. <br />
                  To help explain ideas, several sections use pictures and
                  diagrams (e.g., static vs. server-side rendering).
                </li>
                <li>
                  <strong>Current and Well-Maintained</strong>. The
                  documentation is regularly updated by the Next.js team to
                  incorporate the newest features and industry best practices.
                  <br />
                  Additionally, the documents include links to community
                  conversations, changelogs, and the Next.js GitHub repository.
                </li>
                <li>
                  <strong>Interactive and Practical Education</strong>. Next.js
                  Learn, an interactive lesson that lets users create a project
                  while learning, is integrated with the documentation
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl">
              5. Explain, in a couple of paragraphs, what you think are two
              major challenges around DNS configuration for less-technical
              customers hosting websites.
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              Knowing about domain name records and how they work makes setting
              up DNS a big challenge for clients less versed in technical
              matters. Some of the various types of records used in DNS
              configurations include A, CNAME, MX, TXT, and NS records, each
              serving a specific purpose. For instance, a CNAME is used for
              aliasing a given domain, while an A record points that domain to
              an IP address. The proper setup of their domains can become quite
              a struggle for customers unless they are fully aware of these
              concepts, ultimately causing problems like not being able to send
              emails or resolve websites. Though most of the hosting providers
              offer a DNS management interface that is easy to use, clients may
              end up with unintended downtime of their websites. For instance,
              deleting a crucial record or pointing to the wrong IP could be
              disastrous if the clients are not careful.
              <br />
              <br />
              DNS propagation delays and troubleshooting difficulties create
              havoc when users update their DNS settings, for example, changing
              name servers or changing IP addresses, which they wish to see in
              action instantly. Nevertheless, DNS changes take time to propagate
              to global servers, anywhere between a few minutes and 48 hours.
              This sometimes creates confusion among nontechnical users, who may
              not understand why their site is still pointing at the old server
              or why their change is not effective immediately. At the same
              time, troubleshooting DNS issues by using thin command-line tools
              like nslookup or dig or even less customizable online DNS checkers
              could be intimidating to some users. Customers may consider
              changing their configuration without proper guidance, making the
              situation worse.
            </p>
          </li>
          <li>
            <h2 className="text-2xl">
              6. A customer writes in to Support saying simply that their “site
              won’t build”. You have access to their build logs, and there you
              see this error: Build failed due to a user error: Build script
              returned non-zero exit code: 2. You have no more information than
              this and the site’s source repository is private so you cannot
              test the build yourself. How would you troubleshoot this issue?
              What steps would you take? Also, please compose your best
              customer-facing first response.
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              Hi [{"Customer's"} Name],
              <br />
              <br />
              Thanks for reaching out! I see that your build is failing with the
              error:
              <br />
              Build failed due to a user error: Build script returned non-zero
              exit code: 2.
              <br />
              <br />
              This typically indicates an issue with your project configuration,
              dependencies, or build process. Please try running npm run build
              (or yarn build) on your local machine. If the error occurs there
              as well, {"it's"} likely a code-related issue. Additionally,
              please review any recent changes you made. If your site was
              building successfully before, a recent update may have caused the
              issue. I also recommend checking your build logs in Netlify, as
              they provide more detailed information about where and why the
              build failed. If the issue persists after these checks, could you
              provide me with the framework {"you're"} using and the build logs?
              That will help us diagnose the problem and find a solution.
              <br />
              <br />
              Looking forward to your response!
              <br />
              <br />
              Best regards,
              <br />
              Ervin
            </p>
          </li>
          <li>
            <h2 className="text-2xl">
              7. How would you set up an http 301 status redirect from
              “/netlify/anything” on your site, to
              https://www.google.com/search?q=anything. Please provide the
              redirect formatting here. Now, how about a proxy redirect? Please
              add that proxy redirect rule directly to your site. (Please add
              the proxy redirect to your website!)
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              I usually set up an HTTP 301 redirect in Netlify by creating a
              netlify.toml file in the root folder of the project and adding the
              following code:
              <br />
              <br />
              [[redirects]]
              <br />
              {`from = "/netlify/:query"`}
              <br />
              to = {`"https://www.google.com/search?q=:query"`}
              <br />
              status = 301
              <br />
              force = true
              <br />
              <br />
              For proxy it is the almost the same setup with redirects, but
              instead of redirect it will rewrite the content without changing
              the browser URL
              <br />
              <br />
              [[redirects]]
              <br />
              {`from = "/my-prox-website"`}
              <br />
              to = {`"https://ervingorospe-assessment.netlify.app"`}
              <br />
              status = 200
              <br />
              force = true
            </p>
          </li>
          <li>
            <h2 className="text-2xl">
              8. Please attempt to deploy a function on our service. This need
              not be complicated. It could be {`"Hello World"`}. Note that
              failure to deploy is not failing the exercise! Whether you have
              trouble or not, please describe what you experienced and how you
              attempted to troubleshoot any issues you encountered.
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              First, I read the Netlify documentation and searched on Google
              about deploying functions in Netlify. I then created a folder
              named netlify/functions, added a file called hello.js, and wrote
              some code to print out {`"Hello, World!"`}. Deploying functions in
              Netlify is really amazing—it allows you to deploy specific
              functions or APIs without needing to create an entire project just
              for one service.
            </p>
          </li>
          <li>
            <h2 className="text-2xl">
              9. We understand you {"don't"} know anything about our internal
              procedures at this stage, but we want you to explain at a high
              level how {"you'd"} react to this situation: You receive a report
              of a severe security issue on www.netlify.com. You {"can't"}{" "}
              immediately confirm the report, so what steps might you take to
              investigate or substantiate the report? What might you say to the
              reporter, even though we {"haven't"} confirmed their assertion
              yet, that will instill confidence that our business is very
              concerned about security? You believe there is a reasonable chance
              the report is correct and the problem is very large and impactful.
              How might you escalate?
            </h2>
            <p className="border p-8 rounded-md mt-6 ml-4 text-gray-300 text-lg">
              Hi [{"Reporter's"} Name]
              <br />
              <br />
              Thank you for bringing this to our attention. Security is one of
              our top priorities at Netlify, and we take all reports seriously.
              <br />
              <br />
              We will review the details of your report and take the necessary
              actions to safeguard our {"users'"} information. <br />
              While we have not yet confirmed the issue, we appreciate your
              diligence and will prioritize this investigation.
              <br />
              <br />
              Rest assured, we are committed to providing a secure platform and
              the best possible service to our users.
              <br />
              <br />
              If you have any additional information regarding your report, we
              would greatly appreciate it, as it will assist us in our
              investigation and assessment of the issue.
              <br />
              <br />
              Best Regards,
              <br />
              Ervin
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}
