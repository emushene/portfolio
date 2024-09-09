using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class QueryObject
    {
     public string? CompanyName { get; set; }
    public string? Symbol { get; set; }
    public string? SortBy { get; set; }
    public bool IsDescending { get; set; }  // Add this property
    public int PageNumber { get; set; } = 1;
    public int PageSize { get; set; } = 20;
    }
}