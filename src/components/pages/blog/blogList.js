import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux"
import { fetchBlog } from "../../../redux/blog/blogActions"
import { HeaderPartial, AsidePartial, Footer } from "../../partials";
import PuffLoader from "react-spinners/PuffLoader";

const Blog = ({ fetchBlog, blogData }) => {

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);
  return (
    <Fragment>
      <HeaderPartial />

      <div className="content-wrapper">
        <AsidePartial />

        <main>
          <section class="blog-section">
            <h2 class="section-title">Blog Posts</h2>
            <p style={{ fontSize: "1rem" }}>
              My aim with this page is to post tutorials linked to my youtube account, From my years of experience, I have to understand that mosit tutorials out there are not beginners friendly. I intend to change that...
              <br />
              For now , the posts below are all dummy posts , I will be updating them soon ....


            </p>
            {blogData.loading ? (
              <div className="sweet-loading">
                <PuffLoader
                  size={60}
                  color={"#123abc"}
                  loading={blogData.loading}
                />
            Please Wait...
              </div>
            ) : blogData.error ?
                (<h2>{blogData.error}</h2>) : (
                  <div className="blog-posts-wrapper">
                    {blogData.blogItems.map(({ id, title, created }) => (
                      <article className="blog-post" key={id}>
                        <a href={`/blog/${id}`} className="blog-post-link">
                          <img
                            src="assets/images/News_6.jpg"
                            alt="news 6"
                            className="blog-post-thumbnail"
                          />
                          <h5 className="blog-post-title">{title}</h5>
                        </a>
                        <p className="blog-post-meta">
                          <span className="post-published-date">{created}</span>
                          <a href="#!" className="post-comments">
                            3 COMMENTS
        </a>
                        </p>
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
    blogData: state.blog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlog()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
