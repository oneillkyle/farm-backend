# from django.db import models

# class Farm(models.Model):
#     name = models.CharField(max_length=2000, unique=True)

#     def __unicode__(self):
#         return "Farm: {0}.".format(self.name)

#     class Meta:
#         db_table = 'farm'
#         managed = True
#         verbose_name = 'Farm'


# class FarmBudget(models.Model):
#     farm = models.ForeignKey('api.farm')
#     amount = models.DecimalField(max_places=10, decimal_places=2)
#     start_date = models.DateField()
#     end_date = models.DateField()

#     def __unicode__(self):
#         return "Farm Budget For {0} - {1}.".format(self.start_date, self.end_date)

#     class Meta:
#         db_table = 'farm_budget'
#         managed = True
#         verbose_name = 'Farm Budget'

# class Plot(models.Model): #location
#     name = models.CharField(max_length=256, unique=True)
#     plot_width = models.PositiveIntegerField()
#     plot_length = models.PositiveIntegerField()
#     plot_location = models.IntegerField()
#     farm = models.ForeignKey('api.Farm', related_name='plots')

#     def __unicode__(self):
#         return "Plot: {0}.".format(self.name)

#     class Meta:
#         db_table = 'plot'
#         managed = True
#         verbose_name = 'Plot'
#         ordering = ['plot_location']


# class Crop(models.Model): # for a swath/multiple plants
#     crop_type = models.ForeignKey('api.CropType', related_name='crops')

#     def __unicode__(self):
#         return "Crop: {0}".format(self.crop_type)

#     class Meta:
#         db_table = 'crop'
#         managed = True
#         verbose_name = 'Crop'


# class CropHistory(models.Model):
#     crop = models.ForeignKey('api.Crop')
#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)
#     plot_width_coordinate = models.IntegerField(blank=True, null=True)
#     plot_length_coordinate = models.IntegerField(blank=True, null=True)
#     status = models.ForeignKey('api.CropStatus', related_name='crop_histories')
#     seed_status = models.ForeignKey('api.SeedStatus', related_name='crop_histories')
#     amount = models.DecimalField(max_places=10, decimal_places=2, blank=True, null=True)
#     weight = models.DecimalField(max_places=10, decimal_places=2, blank=True, null=True)
#     number = models.PositiveIntegerField(blank=True, null=True)
#     plot = models.ForeignKey('api.plot', blank=True, null=True, related_name='crop_histories')
#     supplier = models.ForeignKey('api.supplier', blank=True, null=True, related_name='crop_histories')
#     price = models.DecimalField(max_places=10, decimal_places=2, blank=True, null=True)
#     serial_number = models.CharField(blank=True)
#     description = models.TextField(blank=True)

#     def __unicode__(self):
#         return "Crop History: {0}".format(self.status)

#     class Meta:
#         db_table = 'crop_history'
#         managed = True
#         verbose_name = 'Crop History'


# class CropType(models.Model):
#     name = models.CharField(max_length=1024, unique=True)
#     details = models.TextField(blank=True)
#     average_days_to_mature = models.IntegerField(blank=True, null=True)
#     row_width = models.IntergerField(blank=True, null=True)
#     row_length = models.IntegerField(blank=True, null=True)
#     feeding_requirements = models.TextField(blank=True)
#     min_temp = models.IntegerField(blank=True, null=True)
#     max_temp = models.IntegerField(blank=True, null=True)
#     susceptible_to = models.ManyToMany('api.Threat')

#     def __unicode__(self):
#         return "{0}".format(self.name)

#     class Meta:
#         db_table = 'crop_type'
#         managed = True
#         verbose_name = 'Crop Type'

# class CropTypeLinks(models.Model):
#     link = models.URLField()
#     crop_type = models.ForeignKey('api.CropType', related_name='links')

#     def __unicode__(self):
#         return "{0}".format(self.link)

#     class Meta:
#         db_table = 'crop_type_link'
#         managed = True
#         verbose_name = 'Crop Type Link'


# class PlotAmendment(model.Model):
#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)
#     amendment_type = models.ForeignKey('api.PlotAmendmentType', related_name='amendments')
#     plot = models.ForeignKey('api.Plot', related_name='amendments')
#     plot_width_coordinate = models.IntegerField(blank=True, null=True)
#     plot_length_coordinate = models.IntegerField(blank=True, null=True)
#     supplier = models.ForeignKey('api.Supplier', blank=True, null=True, related_name='amendments')
#     weeds

#     def __unicode__(self):
#         return "Plot Amendment: {0}.".format(self.amendment_type)

#     class Meta:
#         db_table = 'plot'
#         managed = True
#         verbose_name = 'Plot'
#         ordering = ['plot_location']


# class PlotAmendmentType(model.Model):
#     pass


# class PlotAmendmentHistory(model.Model):
#     pass
#     treated


# class Supplier(model.Model): #buyer
#     name = models.CharField(max_length=2000, unique=True)


# class Inventory(models.Model):
#     crop_type
#     soil_amendment
#     cost
#     number
#     weight
#     time_spent
#     type = crop/machine


# class expenses(models.Model):
#     stuff
#     year
#     type = crop/machine/labor
#     hourly wage
#     time spent