import React from "react"
import PropTypes from "prop-types"

import "./style.css"

const MiscPageLayout = ({ children }) => (
  <div className="page-title misc-content">{children}</div>
)

MiscPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MiscPageLayout
