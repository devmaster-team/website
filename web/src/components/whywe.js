import React from "react";

class Whywe extends React.Component {
  render () {
    return (
        <>
          <div id="whywe" className="feature-icon-wrapper section-space--pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center section-space--mb_20">
                                <h3 className="heading">Why we?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-list__three">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="grid-item animate">
                                            <div className="ht-box-icon style-03">
                                                <div className="icon-box-wrap">
                                                    <div className="content-header">
                                                        <div className="icon">
                                                            <i className="fal fa-shield-check"></i>
                                                        </div>
                                                        <h5 className="heading">
                                                            Experience
                                                        </h5>
                                                    </div>
                                                    <div className="content">
                                                        <div className="text">We have many years of backend development and
                                                            we exactly know how to design software to achieve good,
                                                            scalable and testable architecture.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="grid-item animate">
                                            <div className="ht-box-icon style-03">
                                                <div className="icon-box-wrap">
                                                    <div className="content-header">
                                                        <div className="icon">
                                                            <i className="fal fa-lock-alt"></i>
                                                        </div>
                                                        <h5 className="heading">
                                                            Coding
                                                        </h5>
                                                    </div>
                                                    <div className="content">
                                                        <div className="text">We know that the most important is how
                                                            software is designed and how tests are written.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="grid-item animate">
                                            <div className="ht-box-icon style-03">
                                                <div className="icon-box-wrap">
                                                    <div className="content-header">
                                                        <div className="icon">
                                                            <i className="fal fa-magnet"></i>
                                                        </div>
                                                        <h5 className="heading">
                                                            Design patterns
                                                        </h5>
                                                    </div>
                                                    <div className="content">
                                                        <div className="text">We use design patterns. You can be sure that
                                                            your software will be build with factories, builders,
                                                            commands. Classes will be hidden behind abstractions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="grid-item animate">
                                            <div className="ht-box-icon style-03">
                                                <div className="icon-box-wrap">
                                                    <div className="content-header">
                                                        <div className="icon">
                                                            <i className="fal fa-medal"></i>
                                                        </div>
                                                        <h5 className="heading">
                                                            Rudiments
                                                        </h5>
                                                    </div>
                                                    <div className="content">
                                                        <div className="text">To avoid spaghetti code we follow "tell don't
                                                            ask principle" and expose properties only in DTO objects and
                                                            other data classes. We understand that "what you hide you
                                                            can change", we are aware of "not creating objects in place
                                                            where we use them" and many more. We are refactoring
                                                            experts.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="section-under-heading text-center section-space--pt_30">
                                    If you also understand how important are things we just mentioned you know that we
                                    are appropriate people to hire.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
};

export default Whywe;