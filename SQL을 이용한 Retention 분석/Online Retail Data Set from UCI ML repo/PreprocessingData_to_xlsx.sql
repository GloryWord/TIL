SELECT *
FROM `online_retail_dataset`.`sales_raw`
WHERE (InvoiceNo, Description, InvoiceDate, CustomerID) NOT IN (
    SELECT A.InvoiceNo, A.Description, A.InvoiceDate, A.CustomerID
    FROM `online_retail_dataset`.`sales_raw` A
    JOIN `online_retail_dataset`.`sales_raw` B
        ON A.InvoiceNo = B.InvoiceNo
        AND A.Description = B.Description
        AND A.InvoiceDate = B.InvoiceDate
        AND A.CustomerID = B.CustomerID
        AND A.StockCode <> B.StockCode
)
INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Data/Result.csv'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'; 