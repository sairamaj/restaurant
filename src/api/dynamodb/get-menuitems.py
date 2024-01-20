import json
import boto3
from boto3.dynamodb.conditions import Key

from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
  def default(self, obj):
    if isinstance(obj, Decimal):
      return str(obj)
    return json.JSONEncoder.default(self, obj)

def execute_query(pk, sk=None):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Restaurant')
    response = table.query(KeyConditionExpression=Key('PartitionKey').eq(pk))
    return response["Items"]

menuitems = execute_query('MENU')
print(json.dumps(menuitems, cls=DecimalEncoder))
