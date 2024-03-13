import h from "hyperscript";
import helpers from "hyperscript-helpers";
import './layout.scss'
import Menu from "../Menu";
import Content from "../Content";
import Media from "../Media";

const { div, header, h1 } = helpers(h);

const PageLayout = div({className: 'ni-page-layout'}, [
                        header({className: 'ni-menu-layout'}, Menu),
                        div({className: 'ni-image-layout'}, Media),
                        div({className: 'ni-content-layout'}, Content)
]);

export default PageLayout;