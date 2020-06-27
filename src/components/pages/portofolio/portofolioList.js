import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux"
import { fetchPortfolio } from "../../../redux/portofolio/PortfolioActions"
import { HeaderPartial, AsidePartial, Footer } from "../../partials";


const Portfolio = ({ fetchPortfolio, portfolioData }) => {

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);
  return (
    <Fragment>
      <HeaderPartial />

      <div className="content-wrapper">
        <AsidePartial />

        <main>
          <section class="blog-section">
            <h2 class="section-title">My Portofolio</h2>
            {portfolioData.loading ? (
              <h2>Loading</h2>
            ) : portfolioData.error ?
                (<h2>{portfolioData.error}</h2>) : (
                  <div className="blog-posts-wrapper">
                    {portfolioData.portfolioItems.map(({ id, title, desc, url, img }) => (
                      <article className="blog-post" key={id}>
                        <a href={`${url}`} className="blog-post-link" target="_blank" rel="noopener noreferrer">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/${img}`}
                            alt="news 6"
                            className="blog-post-thumbnail"
                          />
                          <h5 className="blog-post-title" style={{ fontWeight: "800" }}>{title}</h5>
                          <p className="blog-post-title">{desc}</p>
                        </a>

                      </article>
                    ))}


                  </div>
                )
            }

          </section>
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    portfolioData: state.portfolio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: () => dispatch(fetchPortfolio()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
