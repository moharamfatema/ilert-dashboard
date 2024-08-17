
const schema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "status": {
                "type": "string",
                "description": "the service status",
                "enum": [
                    "OPERATIONAL",
                    "UNDER_MAINTENANCE",
                    "DEGRADED",
                    "PARTIAL_OUTAGE",
                    "MAJOR_OUTAGE"
                ]
            },
            "description": {
                "type": "string"
            },
            "oneOpenIncidentOnly": {
                "type": "boolean"
            },
            "showUptimeHistory": {
                "type": "boolean"
            },
            "teams": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer",
                            "format": "int64"
                        },
                        "name": {
                            "type": "string"
                        }
                    }
                }
            },
            "subscribed": {
                "type": "boolean",
                "readOnly": true
            },
            "uptime": {
                "type": "object",
                "properties": {
                    "rangeStart": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "rangeEnd": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "outages": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "description": "the service status",
                                    "enum": [
                                        "OPERATIONAL",
                                        "UNDER_MAINTENANCE",
                                        "DEGRADED",
                                        "PARTIAL_OUTAGE",
                                        "MAJOR_OUTAGE"
                                    ]
                                },
                                "from": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "until": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            }
                        }
                    },
                    "uptimePercentage": {
                        "type": "object",
                        "properties": {
                            "p90": {
                                "maximum": 100,
                                "minimum": 0,
                                "type": "number",
                                "format": "float",
                                "readOnly": true
                            },
                            "p60": {
                                "maximum": 100,
                                "minimum": 0,
                                "type": "number",
                                "format": "float",
                                "readOnly": true
                            },
                            "p30": {
                                "maximum": 100,
                                "minimum": 0,
                                "type": "number",
                                "format": "float",
                                "readOnly": true
                            }
                        }
                    }
                }
            }
        }
    },
    "incidents": {
        "type": "array",
        "description": "Note that this only contains the latest 10 unresolved incidents, use /api/incidents?service=x if more or specific results are needed",
        "readOnly": true,
        "items": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "summary": {
                    "type": "string"
                },
                "status": {
                    "type": "string",
                    "description": "the incident status",
                    "enum": [
                        "INVESTIGATING",
                        "IDENTIFIED",
                        "MONITORING",
                        "RESOLVED"
                    ]
                },
                "message": {
                    "type": "string"
                },
                "sendNotification": {
                    "type": "boolean"
                },
                "createdAt": {
                    "type": "string",
                    "description": "May be overwritten during the creation of the incident, otherwise read-only",
                    "format": "date-time"
                },
                "updatedAt": {
                    "type": "string",
                    "description": "May be overwritten during the creation of the incident, otherwise read-only",
                    "format": "date-time"
                },
                "affectedServices": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "impact": {
                                "type": "string",
                                "description": "the service status",
                                "enum": [
                                    "OPERATIONAL",
                                    "UNDER_MAINTENANCE",
                                    "DEGRADED",
                                    "PARTIAL_OUTAGE",
                                    "MAJOR_OUTAGE"
                                ]
                            },
                            "service": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "number"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "status": {
                                        "type": "string",
                                        "description": "the service status",
                                        "enum": [
                                            "OPERATIONAL",
                                            "UNDER_MAINTENANCE",
                                            "DEGRADED",
                                            "PARTIAL_OUTAGE",
                                            "MAJOR_OUTAGE"
                                        ]
                                    },
                                    "description": {
                                        "type": "string"
                                    },
                                    "oneOpenIncidentOnly": {
                                        "type": "boolean"
                                    },
                                    "showUptimeHistory": {
                                        "type": "boolean"
                                    },
                                    "teams": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "id": {
                                                    "type": "integer",
                                                    "format": "int64"
                                                },
                                                "name": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "resolvedOn": {
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                }
            }
        }
    }
}

export default schema;
