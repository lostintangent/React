import React from "react";

class PureComponent extends React.Component {
}

Object.assign(PureComponent.prototype,
              React.addons.PureRenderMixin);

export default PureComponent;