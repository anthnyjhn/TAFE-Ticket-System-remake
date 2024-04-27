CREATE DATABASE TicketSystem;
USE TicketSystem;

CREATE TABLE Admins (
	UserId INT NOT NULL auto_increment,
    Username VARCHAR(20) NOT NULL UNIQUE,
    
    CONSTRAINT PK_Admin PRIMARY KEY (UserId, Username)
);

CREATE TABLE Tickets (
    TicketId INT NOT NULL AUTO_INCREMENT,
    Summary VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Urgency VARCHAR(8) NOT NULL,
    Impact VARCHAR(50) NOT NULL,
    Priority VARCHAR(8) NOT NULL,
    DateLogged DATE NOT NULL,
    Assignee VARCHAR(20) NOT NULL,
    Status VARCHAR(12) NOT NULL,
    DateResolved DATE,
    Solution VARCHAR(255),
    Feedback VARCHAR(255) NOT NULL,
    
    CONSTRAINT FK_Assignee FOREIGN KEY (Assignee) REFERENCES admins(Username),
    CONSTRAINT PK_Ticket PRIMARY KEY (TicketId)
);