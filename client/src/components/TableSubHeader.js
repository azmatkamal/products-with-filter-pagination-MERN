import React from "react";

import { Button, Input, Form, FormGroup } from "reactstrap";

export default function TableSubHeader({
  onChange,
  order,
  order_column,
  keyword,
  keyword_column,
  per_page,
  onFilterClick,
  onSortClick,
}) {
  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            size="sm"
            type="select"
            name="keyword_column"
            style={{ width: "150px" }}
            onChange={onChange}
            value={keyword_column}
          >
            <option value="">Select Column</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="brand">Brand</option>
            <option value="price">Price</option>
            <option value="availability">Availability</option>
            <option value="condition">Condition</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            size="sm"
            type="text"
            name="keyword"
            placeholder="Keyword"
            style={{ width: "150px" }}
            onChange={onChange}
            value={keyword}
          />
        </FormGroup>
        <Button
          color="success"
          type="button"
          size="sm"
          style={{ width: "50px" }}
          onClick={onFilterClick}
        >
          Filter
        </Button>
      </Form>
      <Form inline className="mt-2">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            size="sm"
            type="select"
            name="order_column"
            style={{ width: "150px" }}
            onChange={onChange}
            value={order_column}
          >
            <option value="">Select Column</option>
            <option value="brand">Brand</option>
            <option value="price">Price</option>
            <option value="availability">Availability</option>
            <option value="condition">Condition</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            size="sm"
            type="select"
            name="order"
            style={{ width: "150px" }}
            onChange={onChange}
            value={order}
          >
            <option value="">Select Order</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Input>
        </FormGroup>
        <Button
          color="success"
          type="button"
          size="sm"
          style={{ width: "50px" }}
          onClick={onSortClick}
        >
          Sort
        </Button>
      </Form>
    </div>
  );
}
