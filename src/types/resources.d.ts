export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  timezone:
    | "Europe/Berlin"
    | "America/New_York"
    | "America/Los_Angeles"
    | "Asia/Istanbul";
  position: string;
  department: string;
  avatarUrl: string;
  language: "de" | "en";
  region: "DE" | "GB" | "CH" | "CN" | "IN" | "US" | "FR" | "ES" | "CA" | "IE";
  role: "STAKEHOLDER" | "GUEST" | "RESPONDER" | "USER" | "ADMIN";
  shiftColor: string;
  mutedUntil: string;
  createdAt: string;
  updatedAt: string;
};

export type Team = {
  id: number;
  name: string;
  visibility: "PUBLIC" | "PRIVATE";
  members: {
    user: User;
    role: "STAKEHOLDER" | "GUEST" | "RESPONDER" | "USER" | "ADMIN";
  }[];
  createdAt: string;
  updatedAt: string;
};

export type Block = {
  id: string;
  title: string;
  options?: Record<string, any>;
};

export type Service = {
  id: number;
  name: string;
  status:
    | "OPERATIONAL"
    | "UNDER_MAINTENANCE"
    | "DEGRADED"
    | "PARTIAL_OUTAGE"
    | "MAJOR_OUTAGE";
  description: string;
  oneOpenIncidentOnly: boolean;
  showUptimeHistory: boolean;
  teams: {
    id: number;
    name: string;
  }[];
  subscribed: boolean;
  uptime: {
    rangeStart: string;
    rangeEnd: string;
    outages: {
      status:
        | "OPERATIONAL"
        | "UNDER_MAINTENANCE"
        | "DEGRADED"
        | "PARTIAL_OUTAGE"
        | "MAJOR_OUTAGE";
      from: string;
      until: string;
    }[];
    uptimePercentage: {
      p90: number;
      p60: number;
      p30: number;
    };
  };
  incidents: {
    id: number;
    summary: string;
    status: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
    message: string;
    sendNotification: boolean;
    createdAt: string;
    updatedAt: string;
    affectedServices: {
      impact:
        | "OPERATIONAL"
        | "UNDER_MAINTENANCE"
        | "DEGRADED"
        | "PARTIAL_OUTAGE"
        | "MAJOR_OUTAGE";
      service: {
        id: number;
        name: string;
        status:
          | "OPERATIONAL"
          | "UNDER_MAINTENANCE"
          | "DEGRADED"
          | "PARTIAL_OUTAGE"
          | "MAJOR_OUTAGE";
        description: string;
        oneOpenIncidentOnly: boolean;
        showUptimeHistory: boolean;
        teams: {
          id: number;
          name: string;
        }[];
      };
    }[];
    resolvedOn: string;
  }[];
};

export type Incident = {
  id: number;
  summary: string;
  status: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
  message: string;
  sendNotification: boolean;
  createdAt: string;
  updatedAt: string;
  affectedServices: {
    impact:
      | "OPERATIONAL"
      | "UNDER_MAINTENANCE"
      | "DEGRADED"
      | "PARTIAL_OUTAGE"
      | "MAJOR_OUTAGE";
    service: Service;
  }[];
  resolvedOn: string;
};

type Alert = {
  summary: string;
  alertSource: {
    name: string;
    iconUrl: string;
  };
}

export type Activity = {
  id: number;
  alert: Alert;
  logEntryType: "ConnectorAutomaticResultErrorLogEntry" |
    "ConnectorAutomaticResultLogEntry" |
    "AlertActionErrorLogEntry" |
    "AlertActionFailLogEntry" |
    "AlertActionSuccessLogEntry" |
    "AlertNotRoutedLogEntry" |
    "AlertReceivedLogEntry" |
    "AlertRoutedSuccessfulLogEntry" |
    "AlertSourceResponseLogEntry" |
    "CallLogEntry" |
    "EmailReceivedLogEntry" |
    "EmailResolvedLogEntry" |
    "FilterableLogEntryType" |
    "HeartbeatOverdueLogEntry" |
    "HeartbeatResolvedLogEntry" |
    "AlertAssignedBySystemLogEntry" |
    "AlertAssignedByUserLogEntry" |
    "AlertAssignedToPolicyLogEntry" |
    "AlertAssignedToScheduleLogEntry" |
    "AlertAutoResolvedLogEntry" |
    "AlertCommentAddedBySystemLogEntry" |
    "AlertCommentAddedLogEntry" |
    "AlertCommentPublishedLogEntry" |
    "AlertCreatedByUserLogEntry" |
    "AlertRaisedBySystemLogEntry" |
    "AlertRaisedByUserLogEntry" |
    "AlertSummaryChangedLogEntry" |
    "IncomingCallLogEntry" |
    "LowPriorityCallLog" |
    "MailboxCallLogEntry" |
    "MailboxRecordReceivedLog" |
    "MailboxTranscribedReceivedLog" |
    "NobodyOnCallLogEntry" |
    "NotificationLogEntry" |
    "ParallelCallLogEntry" |
    "PhoneNumberNotSetLogEntry" |
    "PhoneNumberBlockedLogEntry" |
    "QueueResultLogEntry" |
    "StakeholderAddedBySystemLogEntry" |
    "StakeholderAddedLogEntry" |
    "StakeholderRemovedLogEntry" |
    "StakeholderResubscribedLogEntry" |
    "StakeholderUnsubscribedLogEntry" |
    "UserResponseLogEntry" |
    "InComIncidentCreatedLogEntry" |
    "InComIncidentResolvedLogEntry" |
    "InComServiceTransitionLogEntry" |
    "InComLinkedLogEntry" |
    "InComUnlinkedLogEntry" |
    "AlertChannelAttachedByUserLogEntry" |
    "AlertChannelDetachedByUserLogEntry" |
    "AlertEscalatedToLevelLogEntry";
    text: string;
    alertId: number;
    filterTypes: ("NOTIFICATIONS" | "ALERT_SOURCE_EVENTS" | "CALL_ROUTING_EVENTS" | "ALERT_UPDATES" | "CONNECTOR_EVENTS")[];
    vars: Record<string, string>;
    timestamp: string;
};
