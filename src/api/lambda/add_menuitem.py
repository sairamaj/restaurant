import json
import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal

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
        
def lambda_handler(event, context):
  body = json.loads(event['body'])
  category = body['category']
  name= body['name']
  price = Decimal(body['price'])
  add_menuitem(category,name, price)
  response = {
      'statusCode': 200,
      'body': 'successfully created item-2!',
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
  }
  
  return response

