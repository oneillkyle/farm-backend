from django.db import models

class Farm(models.Model):
    name = models.CharField(max_length=1024, unique=True)

    def __unicode__(self):
        return "Farm: {0}.".format(self.name)

    class Meta:
        db_table = 'farm'
        managed = True
        verbose_name = 'Farm'


class FarmBudget(models.Model):
    amount
    year

class FarmLayout(models.Model):
    farm = models.OneToOneField('api.farm', related_name='layout')


class Plot(models.Model): #location
    name = models.CharField(max_length=256, unique=True)
    plot_width = models.IntegerField()
    plot_length = models.IntegerField()
    
    plot_location = models.IntegerField()
    farm = models.ForeignKey('api.Farm', related_name='plots')

    def __unicode__(self):
        return "Plot: {0}.".format(self.name)

    class Meta:
        db_table = 'plot'
        managed = True
        verbose_name = 'Plot'
        ordering = ['plot_location']


class PlotAmendment(model.Model):
    start_date
    end_date
    amendment_type
    coordinates
    supplier

class PlotAmendmentHistory(model.Model):
    pass

class Supplier(model.Model): #buyer
    name


class Crop(models.Model): # for a swath/multiple plants
    crop_type = models.ForeignKey('api.CropType')
    plot = models.ForeignKey('api.Plot', related_name='crops')
    plot_width_coordinate = models.IntegerField()
    plot_length_coordinate = models.IntegerField()
    # date_planted = models.DateField()
    # days_in_plot = models.IntegerField()
    previous_plot = models.ForeignKey('api.Plot', related_name='previous_crops')
    covered_by = models.ForeignKey('api.Covering', blank=True, null=True)
    supplier
    cost
    # weight planted
    # weight harvested
    # number planted
    # number harvest
    # serial number

    def __unicode__(self):
        return "Crop: {0}, {1}x{2}.".format(self.crop_type, self.plot_width_coordinate, self.plot_length_coordinate)

    class Meta:
        db_table = 'crop'
        managed = True
        verbose_name = 'Crop'
        ordering = ['plot_width_coordinate', 'plot_length_coordinate']


class Inventory(models.Model):
    crop_type
    soil_amendment
    cost
    number
    weight
    time_spent
    type = crop/machine


class expenses(models.Model):
    stuff
    year
    type = crop/machine/labor
    hourly wage
    time spent


class CropHistory(models.Model):
    crop = models.ForeignKey('api.Crop')
    start_date
    end_date
    status
    seed status
    amount
    weight
    number
    plot
    supplier
    price
    coordinates/all
    supplier/buyer



class CropType(models.Model):
    name = models.CharField(max_length=1024, unique=True)
    details = models.TextField(blank=True)
    average_days_mature = models.IntegerField(blank=True, null=True)
    row_width = models.IntergerField()
    row_length = models.IntegerField()
    feeding_requirements
    min_temp
    max_temp
    susceptible_to

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'crop_type'
        managed = True
        verbose_name = 'Crop Type'

class CropTypeLinks(models.Model):
    link = models.URLField()
    crop_type = models.ForeignKey('api.CropType', related_name='links')

    def __unicode__(self):
        return "{0}".format(self.link)

    class Meta:
        db_table = 'crop_type_link'
        managed = True
        verbose_name = 'Crop Type Link'