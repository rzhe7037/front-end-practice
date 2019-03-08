import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tag from './component/tag';
import Category from './component/category';
import TableElement from './component/TableElement';
import IssueStatus from './component/IssueStatus';
import Condition from './component/condition';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "index.html should be cache busted",
          description: "#6001 opened 2 hours ago by celandro "
        },
        {
          title: "Allow Flow build-time type checking",
          description: "#5995 opened a day ago by gino-m "
        },
        {
          title: "How to enable and configure svgo?",
          description: "#5994 opened a day ago by emibcn"
        },
        {
          title: "Modules not installed from custom registry when using yarn",
          description: "#5993 opened 2 days ago by ekfn "
        },
        {
          title: "question: Upgrading to CRA 2.x.x, what caused this import functionality difference?",
          description: "#5991 opened 2 days ago by timsnadden "
        },
        {
          title: "npm run build not working",
          description: "#5982 opened 4 days ago by jcarroll2007 "
        },
        {
          title: "Using Angular elements in react app throws TypeError: Cannot read property 'ReactCurrentOwner' of undefined 'only' when bulit with production build script",
          description: "#5977 opened 4 days ago by diablocal81 "
        },
        {
          title: "There might be a problem with the project dependency tree. It is likely not a bug in Create React App, but something you need to fix locally. The react-scripts package provided by Create React App requires a dependency: 'webpack': '4.19.1'",
          description: "#5976 opened 4 days ago by thisisgit "
        },
        {
          title: "Support/document immutable deploys - aka immutablewebapps",
          description: "#5972 opened 4 days ago by loicquirion "
        },
        {
          title: "ServiceWorker 301 Cors redirect",
          description: "#5967 opened 5 days ago by radubrehar "
        },
        {
          title: "CRA with TypeScript Dynamic Imports Produces Error (Promises)",
          description: "#5965 opened 5 days ago by gabrielmicko "
        },
        {
          title: "Space in folder names of local create-react-app copy fails new project creation",
          description: "#5964 opened 6 days ago by larkintuckerllc "
        },
        {
          title: "UNABLE TO INSTALL CREATE REACT APP TOOL",
          description: "#5963 opened 6 days ago by svikhristyuk "
        },
        {
          title: "Unable to use proxy w/ ngrok",
          description: "#5962 opened 6 days ago by danimandella "
        }
      ]
    };
  }
  render() {
    const elements = this.state.data.map((element, id) => <TableElement title={element.title} description={element.description} mesNum="1" />);
    return (
      <div className="App">
        <div className="Navigation-head">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
              <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark; experiment:site_header_dropdowns; group:dropdowns">
                <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#dropdown-menu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="dropdown-menu">
                <ul className="navbar-nav">
                  <li className="nav-item why-github">
                    <a href="#" className="nav-link"><span>Why github?</span><i class="fas fa-angle-down"></i></a>
                    <div className="dropdown-menu why-github-dropdown">
                      <ul>
                        <li className="dropdown-item"><strong>Feature</strong></li>
                        <li className="dropdown-item">Code review</li>
                        <li className="dropdown-item">Project Management</li>
                        <li className="dropdown-item">Integration</li>
                        <li className="dropdown-item">Team Management</li>
                        <li className="dropdown-item">Social coding</li>
                        <li className="dropdown-item">documentation</li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item"><strong>Case Study</strong></li>
                        <li className="dropdown-item"><strong>Security</strong></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Business</a>
                  </li>
                  <li className="nav-item explore">
                    <a href="#" className="nav-link">Explore<i class="fas fa-angle-down"></i></a>
                    <div className="dropdown-menu explore-dropdown">
                      <ul>
                        <li className="dropdown-item"><strong>Explore GitHub</strong></li>
                        <li className="dropdown-item">Learn & contribute</li>
                        <li className="dropdown-item">Topic</li>
                        <li className="dropdown-item">Collections</li>
                        <li className="dropdown-item">Trending</li>
                        <li className="dropdown-item">Learning lab</li>
                        <li className="dropdown-item">open source guide</li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item">Connect with other</li>
                        <li className="dropdown-item">Event</li>
                        <li className="dropdown-item">Community forum</li>
                        <li className="dropdown-item">Github education</li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">MarketPlace</a>
                  </li>
                  <li className="nav-item pricing">
                    <a href="#" className="nav-link">Pricing<i class="fas fa-angle-down"></i></a>
                    <div className="dropdown-menu pricing-dropdown">
                      <ul>
                        <li className="dropdown-item"><strong>Plan</strong></li>
                        <li className="dropdown-item">Developer</li>
                        <li className="dropdown-item">Team</li>
                        <li className="dropdown-item">Business cloud</li>
                        <li className="dropdown-item">Enterprise</li>
                        <li className="dropdown-item"><strong>Compare plans</strong></li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item"><strong>Nonprofit</strong></li>
                        <li className="dropdown-item"><strong>Education</strong></li>

                      </ul>
                    </div>
                  </li>
                </ul>
                <form className="nav-item ml-auto mr-1">
                  <input className="form-control" placeholder="Search"></input>
                </form>
                <div className="btn-group">
                  <button className="btn btn-outline-light">Sign in</button>
                  <button className="btn btn-outline-light">Sign up</button>
                </div>
              </div>
            </div>

          </nav>
        </div>
        <div className="Navigation-bottom">
          <div className="container">
            <nav className="navbar">
              <ol className="breadcrumb mx-0 my-2 p-0 nav-item">
                <li>
                 <svg className="octicon octicon-repo facebook-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                </li>
                <li className="breadcrumb-item"><a href="#">Facebook</a></li>
                <li className="breadcrumb-item"><a href="#">Create-react-app</a></li>
              </ol>
              <div className="form-inline ml-auto">
                <Tag labelName="Watch" number="1748" className="nav-item" iconName="octicon-eye" title="You must be signed in to watch a repository" />
                <Tag labelName="Star" number="60242" className="nav-item" iconName="octicon-star" title="You must be signed in to watch a repository"/>
                <Tag labelName="Fork" number="13090" className="nav-item" iconName="octicon-fork" title="You must be signed in to watch a repository"/>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav">
                <li className="nav-item"><Category name="Code" iconName="octicon-code"/></li>
                <li className="nav-item"><Category name="Issues" number="264" iconName="octicon-issue-opened"/></li>
                <li className="nav-item"><Category name="Pull requests" number="70" iconName="octicon-git-pull-request"/></li>
                <li className="nav-item"><Category name="Projects" number="0" iconName="octicon-project"/></li>
                <li className="nav-item"><Category name="Insights" number="0" iconName="octicon-graph"/></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="reposity-content">
          <div className="container">
            <div className="search-area form-inline">
              <input placeholder="is:issue is:open" className="form-control ml-2"></input>
              <label className="mx-2 px-3 py-1">Labels</label>
              <label className="mx-2 px-3 py-1">Milestones</label>
              <button className="btn btn-success ml-auto">New issues</button>
              <svg class="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
            </div>
            <div className="table-list-header form-inline">
              <IssueStatus status="open" number="264" icon="fab fa-creative-commons-by" />
              <IssueStatus status="closed" number="3502" icon="fas fa-check" />
              <div className="Conditions form-inline ml-auto mr-1">
                <Condition name="Author" />
                <Condition name="Labels" />
                <Condition name="Projects" />
                <Condition name="Milestone" />
                <Condition name="Asignee" />
                <Condition name="Sort" />
              </div>
            </div>
            <div className="table-body">
              {elements}
            </div>
            <nav aria-label="pagination" className="pagination-wrapper">
              <ul className="pagination">
                <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                <li className="page-item"><a class="page-link" href="#">1</a></li>
                <li className="page-item"><a class="page-link" href="#">2</a></li>
                <li className="page-item"><a class="page-link" href="#">3</a></li>
                <li className="page-item"><a class="page-link" href="#">4</a></li>
                <li className="page-item"><a class="page-link" href="#">5</a></li>
                <li className="page-item"><a class="page-link" href="#">....</a></li>
                <li className="page-item"><a class="page-link" href="#">10</a></li>
                <li className="page-item"><a class="page-link" href="#">11</a></li>
                <li className="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
            <div className="tip">
              <p className="mx-auto"><strong>ProTip!</strong> Type g p on any issue or pull request to go back to the pull request listing page.</p>
            </div>

          </div>
        </div>
        <div className="footer">
          <div className="container">
            <ul className="form-inline">
              <li>© 2018 GitHub, Inc.</li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark; experiment:site_header_dropdowns; group:dropdowns">
              <svg height="32" class="octicon octicon-mark-github text-grey" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <div>
              <ul className="form-inline">
                <li><a href="#">Contact GitHub</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
