export default {
    "type": "array",
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
                "format": "date-time"
            },
            "updatedAt": {
                "type": "string",
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
            },
            "subscribed": {
                "type": "boolean",
                "readOnly": true
            },
            "affectedTeams": {
                "type": "array",
                "readOnly": true,
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
