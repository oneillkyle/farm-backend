from django.db import models

class Farm(models.Model):
    name = models.CharField(max_length=2000, unique=True)

    def __unicode__(self):
        return "Farm: {0}.".format(self.name)

    class Meta:
        db_table = 'farm'
        managed = True
        verbose_name = 'Farm'


class Budget(models.Model):
    farm = models.ForeignKey('api.farm', related_name='budgets')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()

    def __unicode__(self):
        return "Budget For {0} - {1}.".format(self.start_date, self.end_date)

    class Meta:
        db_table = 'budget'
        managed = True
        verbose_name = 'Budget'

class Plot(models.Model): #location
    name = models.CharField(max_length=256, unique=True)
    plot_width = models.PositiveIntegerField()
    plot_length = models.PositiveIntegerField()
    plot_location = models.IntegerField()
    farm = models.ForeignKey('api.Farm', related_name='plots')

    def __unicode__(self):
        return "Plot: {0}.".format(self.name)

    class Meta:
        db_table = 'plot'
        managed = True
        verbose_name = 'Plot'
        ordering = ['plot_location']


'''
    Crops can also be amendments, which are coverings/pesticide/etc.
'''
class Crop(models.Model):
    crop_type = models.ForeignKey('api.CropType', related_name='crops')

    def __unicode__(self):
        return "Crop: {0}".format(self.crop_type)

    class Meta:
        db_table = 'crop'
        managed = True
        verbose_name = 'Crop'


class CropHistory(models.Model):
    crop = models.ForeignKey('api.Crop')
    status = models.ForeignKey('api.CropStatus', related_name='crop_histories', blank=True, null=True)
    seed_status = models.ForeignKey('api.SeedStatus', related_name='crop_histories', blank=True, null=True)
    plot = models.ForeignKey('api.plot', blank=True, null=True, related_name='crop_histories')
    supplier = models.ForeignKey('api.supplier', blank=True, null=True, related_name='crop_histories')
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    plot_width_coordinate = models.IntegerField(blank=True, null=True)
    plot_length_coordinate = models.IntegerField(blank=True, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    number = models.PositiveIntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    serial_number = models.SlugField(blank=True)
    description = models.TextField(blank=True)

    def __unicode__(self):
        return "Crop History: {0}".format(self.status)

    class Meta:
        db_table = 'crop_history'
        managed = True
        verbose_name = 'Crop History'


class CropType(models.Model):
    name = models.CharField(max_length=1024, unique=True)
    details = models.TextField(blank=True)
    average_days_to_mature = models.IntegerField(blank=True, null=True)
    min_row_width = models.IntegerField(blank=True, null=True)
    min_row_length = models.IntegerField(blank=True, null=True)
    feeding_requirements = models.TextField(blank=True)
    min_temp = models.IntegerField(blank=True, null=True)
    max_temp = models.IntegerField(blank=True, null=True)
    susceptible_to = models.ManyToManyField('api.Threat')

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'crop_type'
        managed = True
        verbose_name = 'Crop Type'


class CropStatus(models.Model):
    name = models.CharField(max_length=2000, unique=True)
    description = models.TextField(max_length=2000)

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'crop_status'
        managed = True
        verbose_name = 'Crop Status'


class SeedStatus(models.Model):
    name = models.CharField(max_length=2000, unique=True)
    description = models.TextField(max_length=2000)

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'seed_status'
        managed = True
        verbose_name = 'Seed Status'


class Threat(models.Model):
    name = models.CharField(max_length=2000, unique=True)
    description = models.TextField(blank=True)

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'threat'
        managed = True
        verbose_name = 'Threat'


class CropTypeLinks(models.Model):
    link = models.URLField()
    crop_type = models.ForeignKey('api.CropType', related_name='links')

    def __unicode__(self):
        return "{0}".format(self.link)

    class Meta:
        db_table = 'crop_type_link'
        managed = True
        verbose_name = 'Crop Type Link'


class Supplier(models.Model): #buyer
    name = models.CharField(max_length=2000, unique=True)
    address = models.CharField(max_length=2000, blank=True)
    phone = models.IntegerField(blank=True, null=True)
    email = models.EmailField(blank=True)
    notes = models.TextField(blank=True)

    def __unicode__(self):
        return "{0}".format(self.name)

    class Meta:
        db_table = 'supplier'
        managed = True
        verbose_name = 'Supplier'


class Inventory(models.Model):
    farm = models.OneToOneField('api.Farm')

    def __unicode__(self):
        return "Inventory for: {0}".format(self.crop_type)

    class Meta:
        db_table = 'inventory'
        managed = True
        verbose_name = 'Inventory'


class InventoryItem(models.Model): # add equipment at some point?
    inventory = models.ForeignKey('api.Inventory', related_name='items')
    crop_type = models.ForeignKey('api.CropType', related_name='inventory_items')
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    amount = models.PositiveIntegerField(blank=True, null=True)

    def __unicode__(self):
        return "Inventory for: {0}".format(self.crop_type)

    class Meta:
        db_table = 'inventory_item'
        managed = True
        verbose_name = 'Inventory Item'


class Expense(models.Model):
    budget = models.ForeignKey('api.Budget')
    crop_type = models.ForeignKey('api.CropType', related_name='expenses', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time_spent = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    amount = models.PositiveIntegerField(blank=True, null=True)
    description = models.TextField(blank=True)

    def __unicode__(self):
        return "Expenses for: {0} - {1}".format(self.start_date, self.end_date)

    class Meta:
        db_table = 'expense'
        managed = True
        verbose_name = 'Expense'