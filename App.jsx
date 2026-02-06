import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">毕业作业</div>
          <div className="navbar-links">
            <a href="#pain-points" className="navbar-link">痛点场景</a>
            <a href="#mvp-products" className="navbar-link">MVP产品</a>
            <a href="#idea-to-product" className="navbar-link">思路分享</a>
            <a href="#projects-showcase" className="navbar-link">项目展示</a>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">课程学习成果展示</h1>
          <p className="hero-subtitle">
            将之前课程学习的内容融会贯通，制作公网可访问的网页，作为课程毕业名片
          </p>
        </div>
      </section>

      {/* 痛点场景分析 */}
      <section id="pain-points" className="pain-points section">
        <div className="container">
          <h2 className="section-title">痛点场景分析</h2>
          <p className="section-subtitle">
            发现并分析日常生活中的痛点问题，为产品设计提供基础
          </p>
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-point-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="pain-point-title">算命小助手</h3>
              <p className="pain-point-description">
                人们在面对生活困惑时，往往希望得到一些指引和建议，但传统算命方式不够便捷，且缺乏个性化体验。
              </p>
            </div>
            <div className="pain-point-card">
              <div className="pain-point-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="pain-point-title">记账小助手</h3>
              <p className="pain-point-description">
                日常记账繁琐，难以坚持，且缺乏直观的数据分析和可视化，导致财务管理效率低下。
              </p>
            </div>
            <div className="pain-point-card">
              <div className="pain-point-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="pain-point-title">云舒老师skills介绍网站</h3>
              <p className="pain-point-description">
                技能分享缺乏系统化的展示平台，难以全面了解教师的专业背景和教学能力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP产品介绍 */}
      <section id="mvp-products" className="mvp-products section">
        <div className="container">
          <h2 className="section-title">MVP产品介绍</h2>
          <p className="section-subtitle">
            基于痛点分析，开发的最小可行产品，实现核心功能
          </p>
          <div className="products-grid">
            <div className="product-card">
              <h3 className="product-title">算命小助手</h3>
              <ul className="product-features">
                <li>提供个性化的命运解读</li>
                <li>基于用户输入的信息生成分析报告</li>
                <li>简洁直观的用户界面</li>
              </ul>
              <a 
                href="https://vercel.com/wujis-projects-57e9bee1/enter-integrated-destiny-reading/8tZjkJuvr4SVcs3iqHCJsWUeZgJH" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="product-link"
              >
                访问项目 →
              </a>
            </div>
            <div className="product-card">
              <h3 className="product-title">记账小助手</h3>
              <ul className="product-features">
                <li>便捷的日常收支记录功能</li>
                <li>自动分类和统计分析</li>
                <li>数据可视化图表展示</li>
              </ul>
              <a 
                href="https://vercel.com/wujis-projects-57e9bee1/bookkeeping-assistant/ETFDFcGNeB8cTuSe4FMgbnBQKY6f" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="product-link"
              >
                访问项目 →
              </a>
            </div>
            <div className="product-card">
              <h3 className="product-title">云舒老师skills介绍网站</h3>
              <ul className="product-features">
                <li>系统化展示教师技能和经验</li>
                <li>清晰的教学成果和案例展示</li>
                <li>专业背景和资质介绍</li>
              </ul>
              <a 
                href="https://vercel.com/wujis-projects-57e9bee1/yunshu/8SER5NanD92R5rybn831SGYCnR9N" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="product-link"
              >
                访问项目 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 从点子到产品的挖掘思路 */}
      <section id="idea-to-product" className="idea-to-product section">
        <div className="container">
          <h2 className="section-title">从点子到产品的挖掘思路</h2>
          <p className="section-subtitle">
            分享自己从点子到产品的完整思考过程
          </p>
          <div className="idea-process">
            <div className="idea-step">
              <div className="idea-step-number">1</div>
              <h3 className="idea-step-title">痛点发现与分析</h3>
              <p className="idea-step-description">
                通过观察日常生活中的问题，发现人们在命运咨询、财务管理和技能展示方面的需求痛点。
                深入分析这些痛点的具体表现和影响，确定解决方向。
              </p>
            </div>
            <div className="idea-step">
              <div className="idea-step-number">2</div>
              <h3 className="idea-step-title">产品定位与功能规划</h3>
              <p className="idea-step-description">
                基于痛点分析，明确每个产品的核心定位和目标用户群体。
                规划MVP阶段的核心功能，确保产品能够解决用户的主要问题。
              </p>
            </div>
            <div className="idea-step">
              <div className="idea-step-number">3</div>
              <h3 className="idea-step-title">技术选型与架构设计</h3>
              <p className="idea-step-description">
                选择适合的技术栈，考虑开发效率和部署便捷性。
                设计简洁清晰的系统架构，确保产品的可扩展性和可维护性。
              </p>
            </div>
            <div className="idea-step">
              <div className="idea-step-number">4</div>
              <h3 className="idea-step-title">界面设计与用户体验</h3>
              <p className="idea-step-description">
                注重用户界面的美观性和易用性，设计符合用户习惯的交互流程。
                确保产品在不同设备上都能提供良好的用户体验。
              </p>
            </div>
            <div className="idea-step">
              <div className="idea-step-number">5</div>
              <h3 className="idea-step-title">开发与部署</h3>
              <p className="idea-step-description">
                采用敏捷开发方式，快速实现核心功能。
                使用Vercel平台进行部署，确保产品能够公网访问。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 项目展示 */}
      <section id="projects-showcase" className="projects-showcase section">
        <div className="container">
          <h2 className="section-title">项目展示</h2>
          <p className="section-subtitle">
            整合三个现有项目，展示课程学习成果
          </p>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-card-content">
                <h3 className="product-title">算命小助手</h3>
                <p className="pain-point-description">
                  提供个性化的命运解读服务，基于用户输入生成分析报告，帮助用户获得生活指引。
                </p>
              </div>
              <div className="showcase-card-footer">
                <a 
                  href="https://vercel.com/wujis-projects-57e9bee1/enter-integrated-destiny-reading/8tZjkJuvr4SVcs3iqHCJsWUeZgJH" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-link"
                >
                  访问项目 →
                </a>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-card-content">
                <h3 className="product-title">记账小助手</h3>
                <p className="pain-point-description">
                  便捷的日常收支记录工具，提供自动分类和数据可视化功能，帮助用户更好地管理个人财务。
                </p>
              </div>
              <div className="showcase-card-footer">
                <a 
                  href="https://vercel.com/wujis-projects-57e9bee1/bookkeeping-assistant/ETFDFcGNeB8cTuSe4FMgbnBQKY6f" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-link"
                >
                  访问项目 →
                </a>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-card-content">
                <h3 className="product-title">云舒老师skills介绍网站</h3>
                <p className="pain-point-description">
                  系统化展示云舒老师的专业技能、教学经验和成果案例，帮助学生更好地了解教师背景。
                </p>
              </div>
              <div className="showcase-card-footer">
                <a 
                  href="https://vercel.com/wujis-projects-57e9bee1/yunshu/8SER5NanD92R5rybn831SGYCnR9N" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-link"
                >
                  访问项目 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p>课程学习成果展示 | 毕业作业</p>
          </div>
          <div className="footer-links">
            <a href="#pain-points" className="footer-link">痛点场景</a>
            <a href="#mvp-products" className="footer-link">MVP产品</a>
            <a href="#idea-to-product" className="footer-link">思路分享</a>
            <a href="#projects-showcase" className="footer-link">项目展示</a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} 毕业作业. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App