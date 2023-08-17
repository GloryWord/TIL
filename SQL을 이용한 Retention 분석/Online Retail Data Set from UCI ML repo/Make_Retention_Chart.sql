select base_ym
	, max(case when idx = 1 then volume end) as m1
	, max(case when idx = 2 then volume end) as m2
	, max(case when idx = 3 then volume end) as m3
	, max(case when idx = 4 then volume end) as m4
	, max(case when idx = 5 then volume end) as m5
	, max(case when idx = 6 then volume end) as m6
	, max(case when idx = 7 then volume end) as m7
	, max(case when idx = 8 then volume end) as m8
	, max(case when idx = 9 then volume end) as m9
	, max(case when idx = 10 then volume end) as m10
	, max(case when idx = 11 then volume end) as m11
	, max(case when idx = 12 then volume end) as m12
from (
	select base_ym, idx, count(customerid) as volume
	from sales_fin
	group by 1,2
) a
group by base_ym
order by base_ym