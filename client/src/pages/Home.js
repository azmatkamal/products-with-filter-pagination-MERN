import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import DataTable from "react-data-table-component";
import { Row, Col } from "reactstrap";
import MetaTags from "react-meta-tags";
import { getProducts } from "../redux/products/action";
import { withRouter } from "react-router-dom";
import TableSubHeader from "../components/TableSubHeader";

const columns = [
  {
    name: "Image",
    maxWidth: "75px",
    cell: (row) => (
      <img height="50px" width="50px" alt={row.title} src={row.image_link} />
    ),
  },
  {
    name: "Title",
    maxWidth: "200px",
    selector: "title",
  },
  {
    name: "Brand",
    maxWidth: "75px",
    selector: "brand",
  },
  {
    name: "Price",
    maxWidth: "75px",
    selector: "price",
  },
  {
    name: "Availability",
    maxWidth: "75px",
    selector: "availability",
  },
  {
    name: "Condition",
    maxWidth: "75px",
    selector: "condition",
  },
  {
    name: "Shipping",
    maxWidth: "125px",
    selector: "shipping",
  },
  {
    name: "Description",
    maxWidth: "300px",
    selector: "description",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoading: false,
      page_number: 1,
      order: "",
      order_column: "",
      keyword: "",
      keyword_column: "",
      per_page: 25,
      meta: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSortClick = (e) => {
    const {
      order,
      order_column,
      keyword,
      keyword_column,
      per_page,
      page_number,
    } = this.state;
    this.props.getProducts(
      { order, order_column, keyword, keyword_column, per_page, page_number },
      this.showLoader
    );
  };

  onFilterClick = (e) => {
    this.setState({ page_number: 1 });
    const { order, order_column, keyword, keyword_column, per_page } =
      this.state;
    this.props.getProducts(
      {
        order,
        order_column,
        keyword,
        keyword_column,
        per_page,
        page_number: 1,
      },
      this.showLoader
    );
  };

  setPage = (page) => {
    this.setState({ page_number: page });
  };

  showLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  componentDidMount() {
    this.props.getProducts(
      { page_number: this.state.page_number, per_page: this.state.per_page },
      this.showLoader
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page_number !== prevState.page_number ||
      this.state.per_page !== prevState.per_page
    ) {
      const {
        order,
        order_column,
        keyword,
        keyword_column,
        per_page,
        page_number,
      } = this.state;
      this.props.getProducts(
        { order, order_column, keyword, keyword_column, per_page, page_number },
        this.showLoader
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.products) {
      this.setState({ products: nextProps.products });
    }
    if (nextProps && nextProps.meta) {
      this.setState({ meta: nextProps.meta });
    }
  }

  render() {
    const {
      products,
      isLoading,
      order,
      order_column,
      keyword,
      keyword_column,
      per_page,
      meta,
    } = this.state;

    const SubHeader = (
      <TableSubHeader
        onChange={this.onChange}
        order={order}
        order_column={order_column}
        keyword={keyword}
        keyword_column={keyword_column}
        onSortClick={this.onSortClick}
        onFilterClick={this.onFilterClick}
        per_page={per_page}
      />
    );

    return (
      <div>
        <Row>
          <Col md="12">
            <MetaTags>
              <title>Products Listing</title>
            </MetaTags>
            <LoadingOverlay active={isLoading} spinner text="Please Wait...">
              <div style={{ minHeight: "300px" }}>
                <div>
                  <h3>Products</h3>
                </div>
                <DataTable
                  style={{ cursor: "pointer" }}
                  noHeader
                  subHeader
                  subHeaderComponent={SubHeader}
                  columns={columns}
                  data={products}
                  highlightOnHover
                  pagination
                  paginationServer
                  paginationTotalRows={meta.totalDocs}
                  paginationPerPage={25}
                  paginationComponentOptions={{
                    noRowsPerPage: true,
                  }}
                  onChangePage={this.setPage}
                  onRowClicked={(row) =>
                    this.props.history.push(`product/${row._id}`)
                  }
                  persistTableHead
                />
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
    products: state.product.products,
    meta: state.product.meta,
  };
};

export default connect(mapDispatchToProps, { getProducts })(withRouter(Home));
