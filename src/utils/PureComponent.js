import React from "react";

// This is simply a helper that allows every
// component to inherit from a base-class instead
// of needing to mix-in the PureRenderMixin

class PureComponent extends React.Component {
}

Object.assign(PureComponent.prototype,
              React.addons.PureRenderMixin);

export default PureComponent;