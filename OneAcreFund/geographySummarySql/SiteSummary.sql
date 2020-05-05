SELECT DistrictName ,SeasonName, SeasonID, SectorName, SectorID , SiteName, SiteID,  Count(GroupID)as GroupCount , sum(ClientCount) as ClientCount, Sum(Acres) as TotalSize from (
SELECT DistrictName , Seasons.SeasonID, SeasonName, Sectors.SectorID , SectorName, Sites.SiteID, SiteName, Groups.GroupID, Count(SeasonClients.ClientID) as ClientCount, Sum(Acres) as Acres from 
Sites inner join Seasons on 
Seasons.SeasonID in (Sites.FirstSeason, Sites.LastSeason)
inner join Sectors on 
Sectors.SectorID = Sites.SectorID
inner join Districts on
Districts.DistrictID= Sectors.DistrictID
inner join Groups on 
Groups.SiteID = Sites.SiteID
left join SeasonClients on 
SeasonClients.GroupID = Groups.GroupID
and SeasonClients.SeasonID = Seasons.SeasonID
and SeasonClients.Dropped = 0
left join SeasonClientInputChoices on
SeasonClientInputChoices.ClientID = SeasonClients.ClientID
and SeasonClientInputChoices.Acres != "-1.00"
where SeasonName like "%. 2011, Long Rain"
group by Groups.GroupID
order by SectorName , SiteName
)
group by SiteName
order by SectorName , SiteName