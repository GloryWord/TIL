CREATE VIEW extracted_sales_raw_view AS (
    SELECT
        YEAR(InvoiceDate) AS year,
        MONTH(InvoiceDate) AS month,
        customerid,
        country,
        SUM(quantity) AS quantity
    FROM `online_retail_dataset`.`sales_raw`
    WHERE customerid IS NOT NULL -- null 값이 아닌 값만 가져온다. 이게 SQL의 직관적 전처리 능력이다.
    GROUP BY 1, 2, 3, 4
    HAVING SUM(quantity) > 0
);
SELECT * FROM extracted_sales_raw_view;