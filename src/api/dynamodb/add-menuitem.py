import boto3
from boto3.dynamodb.conditions import Key

def add_menuitem(category, name, price):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Restaurant')

    table.put_item(
            Item={
                'PartitionKey': 'MENU',
                'SortingKey': name,
                'entry_type': 'menu_item',
                'category' : category,
                'name': name, 
                'price' : price
            }
        )

add_menuitem('STARTERS','MASALA VADA',10)
add_menuitem('STARTERS','PAKORA',8)
add_menuitem('ENTRIES','DAL TADKA',12)
add_menuitem('ENTRIES','BHAGARA BAINGAN',14)
add_menuitem('ENTRIES','MALAI KOFTA',15)
add_menuitem('ENTRIES','PANNEER TIKKA MASALA',16)
add_menuitem('ENTRIES','NAVARATHAN KURMA',16)
add_menuitem('DESSERT','GULAB JAMUN',4)
add_menuitem('DESSERT','DOUBLE KA MEETA',5)