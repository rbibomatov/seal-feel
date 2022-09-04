import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({ editMode: true });
  };

  deactiveEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <input
              maxLength="300"
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactiveEditMode}
              value={this.state.status}
            />
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <span onClick={this.activeEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
