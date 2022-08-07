## Patika-Project With Merge Sort
### Dizin: [16,21,11,8,12,22] -> Merge Sort;
##### Soru 1: Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
1) [16,21,11] ve [8,12,22] şeklinde sağ ve sol taraf olarak ikiye bölünür,
2) Sol taraf [16,21] ve [11] olarak ikiye bölünür,
Sağ taraf ise [8,12] ve [22] olarak ikiye bölünür,
3) Sol taraf [16],[21],[11] olarak ayrılır.
Sağ taraf ise [8],[12],[22] olarak ayrılır.
4) Sol taraf [16,21] ve [11] olarak ayrı ayrı tekrar birleşir.
Sağ taraf ise [8,12] ve [22] olarak tekrar birleşir.
5) Sol taraf kendi içerisinde [11,16,21] olarak kendi içerisinde birleşir.
Sağ taraf ise [8,12,22] olarak kendi içerisinde birleşir.
6) Son olarak sol ve sağ taraf birleşerek [8,11,12,16,21,22] şeklinde
sıralanmış sayı dizisi elde edilir.
##### Soru 2: Big-O gösterimini yazınız.
Diziyi yarıya bölerek ilerlenmesi ile 2^x = n kadar yani logn kadar işlem yapılır 
ve tekrar birleştirmek için n-1 kadar sorgulama yapıldığından, toplamda 
O(nlogn) time complexity'ye sahip bir algoritmadır. 

-----------------------------------------------------------------------------------------------------
[Patika](https://www.patika.dev/tr)





