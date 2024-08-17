const getServiceIcon = (status: string) => {
    switch (status) {
      case "OPERATIONAL":
        return (
          <i className="fas fa-check-circle large" style={{ color: "green" }}></i>
        );
      case "MAJOR_OUTAGE" || "PARTIAL_OUTAGE":
        return (
          <i
            className="fas fa-exclamation-circle large"
            style={{ color: "red" }}
          ></i>
        );
      default:
        return (
          <i
            className="fas fa-circle-minus large"
            style={{ color: "orange" }}
          ></i>
        );
    }
  };

  export { getServiceIcon };
