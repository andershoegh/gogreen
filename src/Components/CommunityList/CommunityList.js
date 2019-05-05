import React from "react";

const CommunityList = ({ communityNames, communityPercent }) => {
  const color = ["#283593", "#FF8A65", "#263238"];

  const community = communityNames.map((name, index) => {
    return (
      <li style={{ color: color[index], fontSize: "14px" }} key={index}>
        {name + " " + communityPercent[index] + "%"}
      </li>
    );
  });

  return <ul>{community}</ul>;

  /* render(){
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
          return (
            <div className="ninja" key={ninja.id}>
              <div>Name: { ninja.name }</div>
              <div>Age: { ninja.age }</div>
              <div>Belt: { ninja.belt }</div>
            </div>
          )
        });
        return (
          <div className="ninja-list">
            { ninjaList }
          </div>
        )
      }*/
};

export default CommunityList;
