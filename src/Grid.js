import React from "react";
import { Table, Modal } from "antd";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isModalOpen: false,
      selectedRow: {},
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.phone - b.phone,
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          dataSource: res,
        });
      });
  }

  render() {
    const { dataSource, columns } = this.state;
    return (
      <div>
        <Table
          total={5}
          dataSource={dataSource}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.setState({
                  isModalOpen: true,
                  selectedRow: record,
                });
              }, // click row
            };
          }}
          pagination={{
            showSizeChanger: false,
            pageSize: 5,
            total: dataSource.length,
            position: ["bottomCenter"],
            hideOnSinglePage: true,
          }}
        />
        <Modal
          title="Modal"
          open={this.state.isModalOpen}
          onOk={() => {
            this.setState({ isModalOpen: false, selectedRow: {} });
          }}
          onCancel={() => {
            this.setState({ isModalOpen: false, selectedRow: {} });
          }}
        >
          <p>Name: {this.state.selectedRow.name}</p>
          <p>EMail: {this.state.selectedRow.email}</p>
          <p>Phone: {this.state.selectedRow.phone}</p>
        </Modal>
      </div>
    );
  }
}

export default Grid;
