create View monthly_idx
as(
	select base_ym, year, month
		, row_number() over(partition by base_ym order by year, month) as idx
 
	from(select distinct year, month from `online_retail_dataset`.`extracted_sales_raw_view`) a
		cross join (select distinct concat(year, month) as base_ym from `online_retail_dataset`.`extracted_sales_raw_view`) b
 
	where base_ym <= concat(year, month)
);
select * from monthly_idx

-- DROP VIEW monthly_idx;