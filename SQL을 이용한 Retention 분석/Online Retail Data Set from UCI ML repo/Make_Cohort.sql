-- create view sales_fin
-- as(
-- 	
-- 	select a.*, idx
-- 	from(
-- 		
-- 		select a.*, base_ym
-- 		from `online_retail_dataset`.`extracted_sales_raw_view` a
-- 		left join (
-- 			
-- 			select *
-- 			from (
-- 				select customerid, country, year, month, concat(year, month) base_ym
-- 					, row_number() over(partition by customerid order by year, month) as base_idx
-- 				from `online_retail_dataset`.`extracted_sales_raw_view`
-- 			) a
-- 			where base_idx = 1
-- 			
-- 		) b
-- 			on a.customerid = b.customerid
-- 	) a
-- 	left join monthly_idx b
-- 		on a.base_ym = b.base_ym
-- 		and a.year = b.year
-- 		and a.month = b.month
--  
-- );
--  
-- select * from sales_fin

-- 볼륨이 지표가 되는건 잘 모르겠지만... 일단 따라한다.
select base_ym, idx, count(customerid) as volume
from sales_fin
where idx = 1
group by 1,2
order by 1,2;