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
        
def lambda_handler(event, context):
    
    menuitems = execute_query('MENU')
    return {
        'statusCode': 200,
        #'body': json.dumps([obj.__dict__ for obj in menuitems])
        'body': json.dumps(menuitems, cls=DecimalEncoder)
    }