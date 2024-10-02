CREATE TABLE KanbanCategory {
    Id int NOT NULL,
    CategoryName varchar(40) NOT NULL,
    PRIMARY KEY (ID)
}

CREATE TABLE KanbanItem {
    Id int NOT NULL,
    Title varchar(40) NOT NULL,
    CategoryId int,
    PRIMARY KEY (ID),
    FOREIGN KEY (CategoryId) REFERENCES KanbanCategory(Id)
}