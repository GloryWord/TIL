SELECT DISTINCT CustomerID, COUNT(DISTINCT(InvoiceDate)) AS OrderCount
FROM `online_retail_dataset`.`sales_raw`
GROUP BY CustomerID
order by OrderCount desc
limit 5000;