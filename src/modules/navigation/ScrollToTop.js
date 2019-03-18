import { Component } from "react";
import { withRouter } from "react-router";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scroll(0, 0);
      //animateScroll.scrollToTop();
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
