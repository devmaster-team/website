import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Appcontext from "../context";
import { navigate } from 'gatsby';

const query = graphql`
query Careers2{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "Careers"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
        frontmatter {
          responsibilitiesLabel
          requirementsLabel
          btnText
            positions {
                id
                name
                responsibilities
                requirements
            }
          }
    }
  }
  }
`;

const Position = (props) => {
  const data = useStaticQuery(query)
  return (
    <Appcontext.Consumer>
      {(context) =>
      (<div>
        <div className="col-lg-5 offset-lg-1 ">
          <div className="tab-content-inner  mt-30">
          <h3 className="section-title"><span className="text-color-primary"> {data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)) && data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)).name}</span>
                                            </h3>
            <div className="text mb-30">{data.allMdx.nodes[context['langIndex']].frontmatter.responsibilitiesLabel}</div>
            <ul className="check-list section-space--mb_40">
              {data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)) && data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)).responsibilities.map(x => (<li className="list-item">{x}</li>))}
            </ul>
            <div className="text mb-30">{data.allMdx.nodes[context['langIndex']].frontmatter.requirementsLabel}</div>
            <ul className="check-list section-space--mb_40">
              {data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)) && data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)).requirements.map(x => (<li className="list-item">{x}</li>))}
            </ul><div className="comment-submit-btn">
              <button className="ht-btn ht-btn-md" onClick={() => navigate("/careers/applying/" + props.id)}>{data.allMdx.nodes[context['langIndex']].frontmatter.btnText}</button>
              <p className="form-messege-2"></p>
            </div>
            <div className="tab-button mt-20">
            </div>
          </div>
        </div>
      </div>)
      }
    </Appcontext.Consumer>
  )
}

export default Position