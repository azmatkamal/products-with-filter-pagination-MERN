import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { InlineShareButtons } from "sharethis-reactjs";
import MetaTags from "react-meta-tags";
import LoadingOverlay from "react-loading-overlay";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  Badge,
  CardBody,
  Alert,
} from "reactstrap";
import { getProduct } from "../redux/products/action";
import { withRouter } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      isLoading: false,
    };
  }

  showLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  componentDidMount() {
    const id = this.props.match.params.id || null;
    this.props.getProduct({ id }, this.showLoader);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      this.setState({ product: nextProps.product });
    }
  }

  render() {
    const { product, isLoading } = this.state;

    return (
      <div>
        <Row>
          <Col md="12">
            <LoadingOverlay active={isLoading} spinner text="Please Wait...">
              <div style={{ minHeight: "300px" }}>
                {product.title && product.title.trim() && (
                  <div>
                    {" "}
                    <MetaTags>
                      <title>{product.title}</title>
                      <meta name="keyword" content={product.title} />
                      <meta name="description" content={product.description} />
                      <meta property="og:title" content={product.title} />
                      <meta property="og:image" content={product.image_link} />
                    </MetaTags>
                    {!isLoading && (
                      <Fragment>
                        <Row className="mt-4">
                          <Col md="4">
                            <Card style={{ marginBottom: "20px" }}>
                              <CardImg
                                top
                                width="100%"
                                src={product.image_link}
                                alt={product.title}
                              />
                            </Card>
                            <InlineShareButtons
                              config={{
                                alignment: "center", // alignment of buttons (left, center, right)
                                color: "social", // set the color of buttons (social, white)
                                enabled: true, // show/hide buttons (true, false)
                                font_size: 16, // font size for the buttons
                                labels: "cta", // button labels (cta, counts, null)
                                language: "en", // which language to use (see LANGUAGES)
                                networks: [
                                  "pinterest",
                                  "linkedin",
                                  "messenger",
                                  "facebook",
                                  "twitter",
                                ],
                                padding: 12, // padding within buttons (INTEGER)
                                radius: 4, // the corner radius on each button (INTEGER)
                                show_total: true,
                                size: 30, // the size of each button (INTEGER)
                              }}
                            />
                          </Col>
                          <Col md="8">
                            <Card>
                              <CardBody>
                                <CardTitle tag="h5">
                                  {product.title}
                                  <br />
                                  <small className="text-muted">
                                    ID: {product._id}
                                  </small>
                                </CardTitle>
                                <CardText>
                                  <Badge
                                    pill
                                    color={
                                      product.availability === "in stock"
                                        ? "success"
                                        : "warning"
                                    }
                                  >
                                    Availability: {product.availability}
                                  </Badge>
                                  <Badge
                                    pill
                                    color={"primary"}
                                    className="ml-2"
                                  >
                                    Price: {product.price}
                                  </Badge>
                                  <Badge pill color={"info"} className="ml-2">
                                    Brand: {product.brand}
                                  </Badge>
                                  <Badge pill color={"danger"} className="ml-2">
                                    Condition: {product.condition}
                                  </Badge>
                                </CardText>
                                <CardText className="text-justify">
                                  {product.description}
                                </CardText>
                                <CardText>
                                  <small className="text-muted">
                                    <strong>Shipping: </strong>
                                    {product.shipping}
                                  </small>
                                  <br />
                                  <small className="text-muted">
                                    <strong>External Link: </strong>
                                    <Link
                                      target="_blank"
                                      to={`//${product.link}`}
                                    >
                                      {product.link}
                                    </Link>
                                  </small>
                                </CardText>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Fragment>
                    )}
                  </div>
                )}
                {!(product.title && product.title.trim()) && (
                  <Alert color="danger">Product not Found!</Alert>
                )}
              </div>
            </LoadingOverlay>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    product: state.product.product,
  };
};

export default connect(mapDispatchToProps, { getProduct })(withRouter(Product));
